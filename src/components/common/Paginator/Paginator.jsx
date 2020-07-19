import React from "react";
import cn from "classnames";
import styles from "./Pagiantor.module.css";

const Paginator = ({currentPage, onPageChanged, totalUsersCount, pageSize}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map((page, item) => {
                        return (
                            <span
                                key={`page-${item}`}
                                className={cn({[styles.selectedPage]: currentPage === page})}
                                onClick={(e) => onPageChanged(page)}
                            >{page}</span>
                        );
                    }
                )
            }
        </div>
    );
};

export default Paginator;