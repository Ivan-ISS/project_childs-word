import styles from './pagination.module.scss';
import { useEffect, useState, useRef } from 'react';
import getPaginationView from '../../../utils/getPaginationView';
import ArrowLeft from '../SvgGenComponent/svgGenComponent';
import ArrowRight from '../SvgGenComponent/svgGenComponent';
import SecondaryButton from '../Buttons/SecondaryButton/secondaryButton';

export interface PaginationProps {
    startPage: number;
    totalPages: number;
    resetPage: unknown;
    handlePagination: (currentPage: number) => void;
}

export default function Pagination({
    startPage,
    totalPages,
    resetPage,
    handlePagination,
}: PaginationProps) {
    const [showPages, setShowPages] = useState<(string | number)[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(startPage);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        setCurrentPage(1);
    }, [resetPage]);

    useEffect(() => {
        setShowPages(getPaginationView(totalPages, currentPage));
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        handlePagination(currentPage);
    }, [currentPage, handlePagination, totalPages]);

    return (
        <div className={styles.pagination}>
            <SecondaryButton
                edges={'rounded'}
                adaptive={true}
                onClick={() => setCurrentPage(currentPage - 1)}
                isDisabled={currentPage === 1 || totalPages === 0}
            >
                <ArrowLeft iconName={'arrowLeft'} width={20} height={20} />
            </SecondaryButton>
            {showPages.map((page, index) => (
                <SecondaryButton
                    key={index}
                    text={page}
                    edges={'rounded'}
                    adaptive={true}
                    isActive={page === currentPage}
                    onClick={typeof page === 'number' ? () => setCurrentPage(page) : () => null}
                />
            ))}
            <SecondaryButton
                edges={'rounded'}
                adaptive={true}
                onClick={() => setCurrentPage(currentPage + 1)}
                isDisabled={currentPage === totalPages || totalPages === 0}
            >
                <ArrowRight iconName={'arrowRight'} width={20} height={20} />
            </SecondaryButton>
        </div>
    );
}
