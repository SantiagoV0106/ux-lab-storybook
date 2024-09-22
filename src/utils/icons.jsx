import PropTypes from "prop-types";

export const IconComponents = {
  add: ({ fill }) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 18 18"
      fill="none"
      className={`fill-current ${fill}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.8741 2H6.04287C3.50999 2 2 3.44631 2 5.87236V11.451C2 13.8837 3.50999 15.33 6.04287 15.33H11.8671C14.4 15.33 15.91 13.8837 15.91 11.4576V5.87236C15.9169 3.44631 14.4069 2 11.8741 2ZM13.1335 9.16487H9.48035V12.664C9.48035 12.9373 9.24376 13.1639 8.95847 13.1639C8.67317 13.1639 8.43658 12.9373 8.43658 12.664V9.16487H4.78339C4.49809 9.16487 4.2615 8.93826 4.2615 8.665C4.2615 8.39174 4.49809 8.16512 4.78339 8.16512H8.43658V4.666C8.43658 4.39274 8.67317 4.16613 8.95847 4.16613C9.24376 4.16613 9.48035 4.39274 9.48035 4.666V8.16512H13.1335C13.4188 8.16512 13.6554 8.39174 13.6554 8.665C13.6554 8.93826 13.4188 9.16487 13.1335 9.16487Z"
        fill={fill}
      />
    </svg>
  ),
  arrowRight: ({ fill }) => (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      className={`fill-current ${fill}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.68902 8.41779L11.2468 8.41779L7.07114 12.9201C6.73743 13.2799 6.73743 13.8704 7.07114 14.2302C7.1503 14.3157 7.24433 14.3836 7.34784 14.4299C7.45135 14.4762 7.56232 14.5 7.67438 14.5C7.78645 14.5 7.89741 14.4762 8.00093 14.4299C8.10444 14.3836 8.19847 14.3157 8.27763 14.2302L13.9165 8.15024C13.9958 8.06489 14.0587 7.9635 14.1016 7.85189C14.1446 7.74028 14.1667 7.62064 14.1667 7.4998C14.1667 7.37897 14.1446 7.25933 14.1016 7.14772C14.0587 7.03611 13.9958 6.93472 13.9165 6.84937L8.27763 0.769417C8.19841 0.684 8.10436 0.616246 8.00086 0.570019C7.89735 0.523792 7.78642 0.499999 7.67439 0.499999C7.56235 0.499999 7.45142 0.523792 7.34791 0.570019C7.24441 0.616246 7.15036 0.684 7.07114 0.769417C6.99192 0.854833 6.92908 0.956238 6.88621 1.06784C6.84334 1.17944 6.82127 1.29906 6.82127 1.41985C6.82127 1.54065 6.84334 1.66026 6.88621 1.77187C6.92908 1.88347 6.99192 1.98487 7.07114 2.07029L11.2468 6.57259L1.68902 6.57259C1.2184 6.57259 0.833352 6.98776 0.833352 7.49519C0.833352 8.00262 1.2184 8.41779 1.68902 8.41779Z"
        fill={fill}
      />
    </svg>
  ),
  helpQuestion: ({ fill }) => {
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.9523 32C60.9523 47.99 47.9899 60.9524 31.9999 60.9524C16.01 60.9524 3.04755 47.99 3.04755 32C3.04755 16.0101 16.01 3.04764 31.9999 3.04764C47.9899 3.04764 60.9523 16.0101 60.9523 32Z"
        fill={fill || "#3BD4AE"}
      />
      <path
        d="M39.8035 19.287H25.1011C20.6904 19.287 17.7499 22.2275 17.7499 26.6382V35.4596C17.7499 39.8703 20.6904 42.8108 25.1011 42.8108V45.9424C25.1011 47.1186 26.4096 47.8243 27.38 47.1627L33.9225 42.8108H39.8035C44.2142 42.8108 47.1547 39.8703 47.1547 35.4596V26.6382C47.1547 22.2275 44.2142 19.287 39.8035 19.287ZM32.4523 37.1798C31.8348 37.1798 31.3496 36.6799 31.3496 36.0771C31.3496 35.4743 31.8348 34.9744 32.4523 34.9744C33.0698 34.9744 33.555 35.4743 33.555 36.0771C33.555 36.6799 33.0698 37.1798 32.4523 37.1798ZM34.3048 31.0783C33.7314 31.4606 33.555 31.7105 33.555 32.1222V32.4309C33.555 33.0337 33.0551 33.5336 32.4523 33.5336C31.8495 33.5336 31.3496 33.0337 31.3496 32.4309V32.1222C31.3496 30.4167 32.5993 29.5786 33.0698 29.2552C33.6138 28.8876 33.7902 28.6377 33.7902 28.2554C33.7902 27.5203 33.1874 26.9175 32.4523 26.9175C31.7172 26.9175 31.1144 27.5203 31.1144 28.2554C31.1144 28.8582 30.6145 29.3581 30.0117 29.3581C29.4089 29.3581 28.909 28.8582 28.909 28.2554C28.909 26.3 30.4969 24.7122 32.4523 24.7122C34.4077 24.7122 35.9956 26.3 35.9956 28.2554C35.9956 29.9315 34.7606 30.7695 34.3048 31.0783Z"
        fill="#FAFAFA"
      />
    </svg>;
  },
  shop: ({ fill }) => {
    return(
      <svg
      width="24"
      height="24"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        d="M16.9842 5.94017L16.7592 3.79138C16.4334 1.44866 15.3707 0.494507 13.0978 0.494507H4.75085C2.47019 0.494507 1.41519 1.44866 1.08163 3.81465L0.872178 5.94793C0.794605 6.77796 1.01957 7.58473 1.50828 8.21307C2.09784 8.98105 3.00545 9.41546 4.01391 9.41546C4.99133 9.41546 5.92997 8.92675 6.51953 8.14326C7.04703 8.92675 7.94688 9.41546 8.94758 9.41546C9.94828 9.41546 10.8249 8.95002 11.3601 8.17428C11.9574 8.94226 12.8806 9.41546 13.8425 9.41546C14.8742 9.41546 15.8051 8.95778 16.3869 8.15101C16.8523 7.53043 17.0618 6.74693 16.9842 5.94017Z"
        fill={fill}
        />
      <path
        d="M8.10776 12.2823C7.16617 12.3787 6.45442 13.1794 6.45442 14.1284V16.1599C6.45442 16.3601 6.61753 16.5232 6.81771 16.5232H10.3542C10.5544 16.5232 10.7175 16.3601 10.7175 16.1599V14.3879C10.7249 12.8384 9.81301 12.1044 8.10776 12.2823Z"
        fill={fill}
        />
      <path
        d="M16.2162 10.6954V13.0071C16.2162 15.1482 14.4786 16.8858 12.3375 16.8858C12.1281 16.8858 11.9574 16.7151 11.9574 16.5057V14.6517C11.9574 13.6587 11.6549 12.883 11.0653 12.3555C10.5456 11.8823 9.83967 11.6496 8.96309 11.6496C8.76916 11.6496 8.57522 11.6573 8.36577 11.6806C6.98497 11.8202 5.93772 12.9839 5.93772 14.3802V16.5057C5.93772 16.7151 5.76706 16.8858 5.55761 16.8858C3.41658 16.8858 1.67894 15.1482 1.67894 13.0071V10.7109C1.67894 10.1679 2.21419 9.80334 2.71842 9.98176C2.92787 10.0516 3.13732 10.1059 3.35453 10.1369C3.44761 10.1524 3.54846 10.1679 3.64155 10.1679C3.76566 10.1834 3.88978 10.1912 4.0139 10.1912C4.91375 10.1912 5.79809 9.85764 6.49625 9.28359C7.16338 9.85764 8.03221 10.1912 8.94758 10.1912C9.8707 10.1912 10.724 9.87315 11.3911 9.29911C12.0893 9.8654 12.9581 10.1912 13.8425 10.1912C13.9821 10.1912 14.1217 10.1834 14.2536 10.1679C14.3467 10.1602 14.432 10.1524 14.5174 10.1369C14.7578 10.1059 14.975 10.0361 15.1922 9.96624C15.6965 9.79558 16.2162 10.1679 16.2162 10.6954Z"
        fill={fill}
        />
    </svg>
    )
  },
};

IconComponents.add.propTypes = {
  name: PropTypes.oneOf(["add", "arrowRight", "helpQuestion", "shop"]),
  fill: PropTypes.string,
};
