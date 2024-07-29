import styles from './pagination.module.scss';
import { useEffect, useState } from 'react';
import SecondaryButton from '../SecondaryButton/secondaryButton';
import ArrowLeft from '../SvgGenComponent/svgGenComponent';
import ArrowRight from '../SvgGenComponent/svgGenComponent';

export interface PaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    handlePagination: (currentPage: number) => void;
}

export default function Pagination ({ totalPages, currentPage, setCurrentPage, handlePagination }: PaginationProps) {
    const [ showPages, setShowPages ] = useState<(string | number)[]>([1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]);

    const updateShowPages = () => {
        if (currentPage === 3) {
            setShowPages([2, 3, 4, '...', totalPages - 2, totalPages - 1, totalPages]);
        } else if (currentPage === totalPages - 2) {
            setShowPages([1, 2, 3, '...', totalPages - 3, totalPages - 2, totalPages - 1]);
        } else if (currentPage > 3 && currentPage < totalPages - 2) {
            setShowPages([1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]);
        } else {
            setShowPages([1, 2, 3, '...', totalPages - 2, totalPages - 1, totalPages]);
        }
    };

    useEffect(() => {
        updateShowPages();
        handlePagination(currentPage);
    }, [currentPage]);

    const handleClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className={styles.pagination}>
            <SecondaryButton
                edges={'rounded'}
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
                    isActive={page === currentPage}
                    onClick={ typeof page === 'number' ? () => handleClick(page) : () => null }
                />
            ))}
            <SecondaryButton
                edges={'rounded'}
                onClick={ () => setCurrentPage(currentPage + 1) }
                isDisabled={currentPage === totalPages}
            >
                <ArrowRight iconName={'arrowRight'} width={20} height={20}/>
            </SecondaryButton>
        </div>
    );
}