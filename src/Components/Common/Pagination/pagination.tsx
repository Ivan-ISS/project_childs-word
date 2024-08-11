import styles from './pagination.module.scss';
import { useEffect, useState } from 'react';
import SecondaryButton from '../Buttons/SecondaryButton/secondaryButton';
import ArrowLeft from '../SvgGenComponent/svgGenComponent';
import ArrowRight from '../SvgGenComponent/svgGenComponent';
import getPaginationView from '../../../utils/getPaginationView';

export interface PaginationProps {
    totalPages: number;
    handlePagination: (currentPage: number) => void;
}

export default function Pagination({ totalPages, handlePagination }: PaginationProps) {
    const [ showPages, setShowPages ] = useState<(string | number)[]>([]);
    const [ currentPage, setCurrentPage ] = useState<number>(1);

    useEffect(() => {
        setShowPages(getPaginationView(totalPages, currentPage));
        handlePagination(currentPage);
    }, [currentPage, handlePagination, totalPages]);

    return (
        <div className={styles.pagination}>
            <SecondaryButton
                edges={'rounded'}
                adaptive={true}
                onClick={ () => setCurrentPage(currentPage - 1) }
                isDisabled={currentPage === 1}
            >
                <ArrowLeft iconName={'arrowLeft'} width={20} height={20}/>
            </SecondaryButton>
            {showPages.map((page, index) => (
                <SecondaryButton
                    key={index}
                    text={page}
                    edges={'rounded'}
                    adaptive={true}
                    isActive={page === currentPage}
                    onClick={ typeof page === 'number' ? () => setCurrentPage(page) : () => null }
                />
            ))}
            <SecondaryButton
                edges={'rounded'}
                adaptive={true}
                onClick={ () => setCurrentPage(currentPage + 1) }
                isDisabled={currentPage === totalPages}
            >
                <ArrowRight iconName={'arrowRight'} width={20} height={20}/>
            </SecondaryButton>
        </div>
    );
}