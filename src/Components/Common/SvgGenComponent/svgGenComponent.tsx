import { SVGAttributes } from 'react';

export interface SvgGenComponentsProps extends SVGAttributes<SVGSVGElement> {
    iconName: string;
}

export default function SvgGenComponents({ iconName, ...props }: SvgGenComponentsProps) {
    switch (iconName) {
        case 'logo':
            return (
                <svg { ...props } width="570" height="92" viewBox="0 0 570 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M562.386 18.8292C564.546 18.9538 568.116 21.4036 568.033 27.009C567.95 32.6145 564.836 34.3999 561.598 34.3999C558.359 34.3999 549.224 34.1093 547.397 34.3999C545.57 34.6906 546.608 36.1854 546.525 37.0158C546.442 37.8462 549.265 37.6802 553.376 37.8462C557.487 38.0123 569.57 41.9985 569.902 55.244C570.234 68.4895 561.722 73.4721 549.681 73.5136C537.639 73.5551 531.411 72.1434 531.245 64.5449C531.079 56.9463 531.162 30.4138 530.996 26.2201C530.83 22.0264 534.359 18.1648 539.882 18.0403C545.404 17.9157 560.227 18.7046 562.386 18.8292ZM551.259 50.1368C548.892 50.0537 548.061 51.5485 547.978 52.2959C547.895 53.0433 547.978 54.4135 548.186 56.4066C548.352 58.3581 553.999 58.9809 554.871 55.7837C555.743 52.5035 553.625 50.2198 551.259 50.1368Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M475.963 32.9429C473.679 29.455 470.814 23.3928 476.253 18.6593C481.693 13.9258 488.128 18.6178 490.91 22.7285C493.692 26.8392 496.267 29.289 497.595 30.7837C498.924 32.2785 501.914 35.019 503.325 30.4931C504.737 25.9672 505.568 23.8911 506.938 20.8185C508.308 17.7458 514.08 15.5867 519.021 17.5382C523.962 19.4898 524.585 24.1402 522.592 29.6211C520.599 35.102 509.512 59.8076 504.903 66.7418C500.294 73.6759 491.367 75.2123 486.26 74.2572C481.153 73.3022 480.654 70.3542 480.862 65.6207C481.07 60.8872 484.225 58.4374 488.585 57.8976C492.945 57.3578 492.405 51.1295 489.083 47.7247C485.762 44.3199 478.246 36.4307 475.963 32.9429Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M424.945 25.6344C424.945 21.6898 426.274 16.8733 433.582 16.7902C440.89 16.7072 442.592 21.067 442.634 24.3472C442.675 27.6275 442.468 26.9216 442.592 29.2053C442.717 31.489 444.876 33.399 448.156 29.8281C451.436 26.2572 452.433 23.8905 454.966 21.0255C457.499 18.1604 461.069 17.5791 465.263 20.4026C469.457 23.2261 469.415 27.1707 466.177 31.489C462.938 35.8073 459.741 39.7104 458.578 41.2051C457.415 42.6999 456.751 44.9006 459.45 48.3469C462.149 51.7932 466.509 58.2291 468.751 61.0942C470.993 63.9592 469.457 67.9453 465.803 70.6857C462.149 73.4262 457.166 72.6373 454.177 68.1529C451.187 63.6685 450.232 61.9246 448.488 59.2257C446.744 56.5267 441.928 55.2811 441.928 58.935C441.928 62.589 442.094 66.3259 442.135 67.9453C442.177 69.5646 440.184 73.6753 433.25 73.5092C426.316 73.3431 425.942 68.0699 425.859 65.0803C425.776 62.0907 424.945 29.6205 424.945 25.6344Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M359.496 21.9682C359.579 25.5806 359.372 29.5251 359.579 32.4317C359.787 35.3382 361.78 40.4869 365.849 35.2967C369.918 30.1065 374.984 20.8471 378.762 17.6914C382.541 14.5357 395.496 14.2451 395.662 22.8816C395.828 31.5182 395.952 60.9988 395.828 65.6077C395.703 70.2167 392.465 72.791 387.565 72.9156C382.665 73.0402 378.555 70.5489 378.306 66.023C378.056 61.4971 378.223 60.542 378.056 56.5144C377.89 52.4868 374.153 51.6148 370.873 56.0162C367.593 60.4175 363.773 65.1095 359.787 70.0921C355.801 75.0747 341.725 75.0332 341.143 67.1856C340.562 59.3379 340.521 27.5736 340.728 22.591C340.936 17.6083 343.801 15.6568 350.444 15.6153C357.088 15.5738 359.413 18.3557 359.496 21.9682ZM364.936 6.10676C366.804 7.35242 371.745 8.68112 373.365 5.52545C375.025 2.36978 377.849 1.74696 381.42 2.66044C385.032 3.57392 385.406 8.59808 379.344 12.6257C373.281 16.6533 364.396 16.1966 359.206 13.9544C354.015 11.7122 353.185 8.6396 353.06 6.5635C352.936 4.52892 354.597 2.12065 358.334 1.87152C362.154 1.62239 363.067 4.8611 364.936 6.10676Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M280.224 23.1458C280.39 19.5334 281.968 16.8345 289.317 16.8345C296.708 16.876 299.158 18.4123 299.033 22.6891C298.909 26.9658 299.241 31.9069 299.241 34.6059C299.241 37.3048 301.483 37.7615 303.601 35.4363C305.718 33.1111 311.822 24.8482 313.774 21.8586C315.725 18.8691 317.884 17.4988 323.78 17.6649C329.677 17.831 331.67 19.2012 331.421 25.388C331.171 31.5748 331.13 65.6643 331.005 68.4878C330.881 71.3113 327.933 73.0552 321.248 72.8891C314.563 72.723 313.151 71.2283 313.109 67.3252C313.109 65.4152 313.068 61.5536 313.068 59.7267C313.068 56.571 311.282 54.1212 308.542 57.1108C304.888 61.0969 301.068 66.4947 297.58 70.1902C294.092 73.8856 291.186 73.4289 287.075 73.5119C282.964 73.595 280.888 71.3528 280.764 65.083C280.639 58.8132 280.058 26.7582 280.224 23.1458Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M220.771 22.1091C220.813 18.8704 222.224 17.1265 230.736 17.0435C239.248 16.9604 240.369 19.5348 240.328 23.1472C240.286 26.7596 240.369 31.6592 240.411 33.6107C240.452 35.5623 241.407 37.2231 245.601 37.0571C249.795 36.891 250.833 36.6003 250.791 33.5692C250.75 30.5381 250.999 24.2683 251.207 21.9015C251.414 19.5348 253.781 17.2511 260.798 17.2511C267.815 17.2511 269.85 18.4967 270.016 22.6074C270.182 26.7181 269.725 65.7487 269.684 68.7798C269.642 71.8109 268.521 72.6829 260.798 72.849C253.075 73.0151 251.165 72.6414 250.833 68.3231C250.501 64.0048 250.916 59.1883 250.916 55.8665C250.916 52.5447 249.587 52.3787 245.269 52.4202C240.951 52.4617 240.535 53.2921 240.369 56.9876C240.203 60.683 240.328 66.8283 240.369 69.8179C240.411 72.8075 238.003 73.4718 230.238 73.5133C222.473 73.5549 222.141 71.5618 221.726 66.3716C221.311 61.1813 220.771 25.3479 220.771 22.1091Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M160.097 23.1458C160.264 19.5334 161.841 16.8345 169.191 16.8345C176.582 16.876 179.031 18.4123 178.907 22.6891C178.782 26.9658 179.115 31.9069 179.115 34.6059C179.115 37.3048 181.357 37.7615 183.474 35.4363C185.592 33.1111 191.696 24.8482 193.647 21.8586C195.599 18.8691 197.758 17.4988 203.654 17.6649C209.55 17.831 211.543 19.2012 211.294 25.388C211.045 31.5748 211.003 65.6643 210.879 68.4878C210.754 71.3113 207.806 73.0552 201.121 72.8891C194.436 72.723 193.024 71.2283 192.983 67.3252C192.983 65.4152 192.941 61.5536 192.941 59.7267C192.941 56.571 191.156 54.1212 188.415 57.1108C184.762 61.0969 180.941 66.4947 177.454 70.1902C173.966 73.8856 171.059 73.4289 166.949 73.5119C162.838 73.595 160.762 71.3528 160.637 65.083C160.513 58.8132 159.931 26.7582 160.097 23.1458Z" fill="#0073E6"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M132.58 36.8363C135.486 36.255 138.974 37.8328 143.5 38.5387C148.026 39.2446 152.801 31.9782 152.095 27.2032C151.389 22.4282 146.863 19.314 141.092 17.5286C135.32 15.7431 125.48 14.7051 116.885 20.8919C108.289 27.0786 104.552 37.3345 106.255 50.497C107.957 63.6595 117.134 71.8808 129.466 73.7078C141.798 75.5348 148.358 72.213 150.725 69.9708C153.092 67.7286 152.469 60.753 149.978 56.5592C147.486 52.3655 141.549 52.324 137.562 53.0299C133.576 53.7357 125.397 51.6181 124.898 45.639C124.4 39.6598 129.715 37.3761 132.58 36.8363Z" fill="#0073E6"/>
                    <path d="M47.7323 82.6712C28.2321 89.7687 21.494 83.3872 15.8165 67.7886L8.5166 47.7322C1.41911 28.232 7.80061 21.4938 23.3992 15.8164L43.4556 8.51646C62.9558 1.41897 69.694 7.80048 75.3714 23.399L82.6713 43.4555C89.7688 62.9557 83.3873 69.6938 67.7887 75.3712L47.7323 82.6712Z" fill="#0073E6"/>
                </svg>
            );
        case 'cart':
            return (
                <svg { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8491 5.52433H8.73651C7.49046 5.52433 7.31561 3.2335 7.0559 2.37056C6.9302 1.95288 6.54675 1.66666 6.1126 1.66666H2.65209C1.29638 1.66666 1.21737 4.49392 2.65209 4.49392C3.41368 4.49392 4.67532 4.23949 4.96333 5.19888L7.00203 12.0142C7.32949 13.1051 8.41328 13.774 9.52875 13.5598C12.0578 13.0788 14.6383 12.4759 16.9547 11.323C17.6677 10.969 18.1494 10.2799 18.2455 9.48696C18.3545 8.57649 18.3561 7.6656 18.2466 6.7551C18.1621 6.04802 17.5579 5.52433 16.8491 5.52433Z" fill="#0073E6"/>
                    <path d="M6.33147 16.5672C6.33147 17.5425 7.12054 18.3333 8.09236 18.3333C9.06417 18.3333 9.85326 17.5425 9.85326 16.5672C9.85326 15.5909 9.06417 14.8 8.09236 14.8C7.12054 14.8 6.33147 15.5909 6.33147 16.5672Z" fill="#0073E6"/>
                    <path d="M15.3107 18.3333C14.3389 18.3333 13.5499 17.5425 13.5499 16.5672C13.5499 15.5909 14.3389 14.8 15.3107 14.8C16.2826 14.8 17.0716 15.5909 17.0716 16.5672C17.0716 17.5425 16.2826 18.3333 15.3107 18.3333Z" fill="#0073E6"/>
                </svg>
            );
        case 'stars':
            return (
                <svg { ...props } width="76" height="16" viewBox="0 0 76 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path 
                        d="M5.81493 12.5999C4.34061 12.5999 3.29926 14.6523 2.10291 13.7872C0.90656 12.9221 2.53795 10.6512 2.10291 9.56977C1.66787 8.48838 -0.289791 8 0.0364866 6.65C0.362764 5.30001 2.75547 5.67675 3.51678 4.85305C4.2781 4.02935 4.4246 2 6.01824 2C7.61189 2 7.85485 4.28427 8.48644 4.85305C9.28102 5.56861 12 5.15728 12 6.65C12 8.14273 10.0646 8.37009 9.82482 9.56977C9.58504 10.7695 10.9124 12.7058 9.82482 13.5709C8.73722 14.4361 7.28926 12.5999 5.81493 12.5999Z
                        M21.8149 12.5999C20.3406 12.5999 19.2993 14.6523 18.1029 13.7872C16.9066 12.9221 18.5379 10.6512 18.1029 9.56977C17.6679 8.48838 15.7102 8 16.0365 6.65C16.3628 5.30001 18.7555 5.67675 19.5168 4.85305C20.2781 4.02935 20.4246 2 22.0182 2C23.6119 2 23.8548 4.28427 24.4864 4.85305C25.281 5.56861 28 5.15728 28 6.65C28 8.14273 26.0646 8.37009 25.8248 9.56977C25.585 10.7695 26.9124 12.7058 25.8248 13.5709C24.7372 14.4361 23.2893 12.5999 21.8149 12.5999Z
                        M37.8149 12.5999C36.3406 12.5999 35.2993 14.6523 34.1029 13.7872C32.9066 12.9221 34.5379 10.6512 34.1029 9.56977C33.6679 8.48838 31.7102 8 32.0365 6.65C32.3628 5.30001 34.7555 5.67675 35.5168 4.85305C36.2781 4.02935 36.4246 2 38.0182 2C39.6119 2 39.8548 4.28427 40.4864 4.85305C41.281 5.56861 44 5.15728 44 6.65C44 8.14273 42.0646 8.37009 41.8248 9.56977C41.585 10.7695 42.9124 12.7058 41.8248 13.5709C40.7372 14.4361 39.2893 12.5999 37.8149 12.5999Z
                        M53.8149 12.5999C52.3406 12.5999 51.2993 14.6523 50.1029 13.7872C48.9066 12.9221 50.5379 10.6512 50.1029 9.56977C49.6679 8.48838 47.7102 8 48.0365 6.65C48.3628 5.30001 50.7555 5.67675 51.5168 4.85305C52.2781 4.02935 52.4246 2 54.0182 2C55.6119 2 55.8548 4.28427 56.4864 4.85305C57.281 5.56861 60 5.15728 60 6.65C60 8.14273 58.0646 8.37009 57.8248 9.56977C57.585 10.7695 58.9124 12.7058 57.8248 13.5709C56.7372 14.4361 55.2893 12.5999 53.8149 12.5999Z
                        M69.8149 12.5999C68.3406 12.5999 67.2993 14.6523 66.1029 13.7872C64.9066 12.9221 66.5379 10.6512 66.1029 9.56977C65.6679 8.48838 63.7102 8 64.0365 6.65C64.3628 5.30001 66.7555 5.67675 67.5168 4.85305C68.2781 4.02935 68.4246 2 70.0182 2C71.6119 2 71.8548 4.28427 72.4864 4.85305C73.281 5.56861 76 5.15728 76 6.65C76 8.14273 74.0646 8.37009 73.8248 9.56977C73.585 10.7695 74.9124 12.7058 73.8248 13.5709C72.7372 14.4361 71.2893 12.5999 69.8149 12.5999Z"
                    />
                </svg>
            );
        case 'arrowLeft':
            return (
                <svg { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.13896 8.85284C3.9423 6.80663 5.80998 4.76965 7.88831 2.99947C9.40196 1.71024 11.2127 3.99134 9.72804 5.2559C8.53241 6.27426 7.42015 7.39241 6.34452 8.54167L17.333 8.54167C18.7145 8.54167 18.7985 11.4583 17.333 11.4583L6.34057 11.4583C7.41743 12.6091 8.53094 13.7287 9.72804 14.7483C11.2446 16.04 9.39346 18.2868 7.8883 17.0048C5.80998 15.2346 3.9423 13.1976 2.13896 11.1514C1.51869 10.4476 1.49942 9.57852 2.13896 8.85284Z" fill="#0073E6"/>
                </svg>
            );
        case 'arrowRight':
            return (
                <svg { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.861 8.85284C16.0577 6.80663 14.19 4.76965 12.1117 2.99947C10.598 1.71024 8.78727 3.99134 10.272 5.2559C11.4676 6.27426 12.5798 7.39241 13.6555 8.54167L2.66699 8.54167C1.28547 8.54167 1.20148 11.4583 2.66699 11.4583L13.6594 11.4583C12.5826 12.6091 11.4691 13.7287 10.272 14.7483C8.7554 16.04 10.6065 18.2868 12.1117 17.0048C14.1954 15.23 16.0539 13.2019 17.861 11.1514C18.4813 10.4476 18.5006 9.57852 17.861 8.85284Z" fill="#0073E6"/>
                </svg>
            );
        case 'arrowUndo':
            return (
                <svg { ...props } width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M17.8584 8.78567C17.3154 7.56236 16.2479 6.70873 14.9864 6.30915C13.8812 5.96519 12.8218 5.96196 11.9551 5.94906C10.6634 5.92434 6.7268 5.88672 6.7268 5.88672L8.5529 4.16476C9.66789 3.03664 7.80932 1.05244 6.57263 1.87527C6.09554 2.19343 5.26322 2.84158 3.96423 4.13789C3.04337 5.05584 2.41731 5.82008 2.00792 6.37794C1.5527 6.99922 1.5527 7.8387 2.00792 8.45998C2.41731 9.01892 3.04337 9.78101 3.96423 10.699C5.26322 11.9963 6.09554 12.6445 6.57263 12.9627C7.80161 13.7838 9.66687 11.8002 8.5529 10.6732L6.71951 9.14253C6.79764 9.14146 10.5123 9.11029 11.9551 9.08234C12.6854 9.07027 13.4361 9.0418 14.1478 9.23605C14.7333 9.41125 15.0312 9.63483 15.2437 10.053C15.7024 11.0234 15.7083 12.5589 14.8645 13.341C14.4937 13.6775 13.853 13.915 13.1072 14.0257C12.8145 14.0719 11.8488 14.1418 11.9655 15.4252C12.0832 16.7151 13.0239 16.6968 13.4291 16.6527C14.4124 16.5388 15.5364 16.2905 16.5531 15.4929C17.5531 14.6865 18.0967 13.4976 18.2667 12.2436C18.4201 11.0856 18.3305 9.86396 17.8584 8.78567Z" fill="#0073E6"/>
                </svg>
            );
        default:
            return <svg></svg>;
    }
}