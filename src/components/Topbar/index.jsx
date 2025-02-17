import styles from "./topbar.module.scss";
import random from "../../utils/random.js";

const variants = {
  battery: [
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.33C0.5 1.76703 1.76703 0.5 3.33 0.5H19.33C20.893 0.5 22.16 1.76703 22.16 3.33V8.67C22.16 10.233 20.893 11.5 19.33 11.5H3.33C1.76704 11.5 0.5 10.233 0.5 8.67V3.33Z"
        stroke="black"
        stroke-opacity="0.4"
      />
      <path
        d="M23.67 4V8C24.4747 7.66122 24.998 6.87313 24.998 6C24.998 5.12687 24.4747 4.33878 23.67 4Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect x="2" y="2" width="18.66" height="8" rx="1.33333" fill="black" />
    </svg>,
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.33C0.5 1.76703 1.76703 0.5 3.33 0.5H19.33C20.893 0.5 22.16 1.76703 22.16 3.33V8.67C22.16 10.233 20.893 11.5 19.33 11.5H3.33C1.76704 11.5 0.5 10.233 0.5 8.67V3.33Z"
        stroke="black"
        stroke-opacity="0.4"
      />
      <path
        d="M23.67 4V8C24.4747 7.66122 24.998 6.87313 24.998 6C24.998 5.12687 24.4747 4.33878 23.67 4Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect x="2" y="2" width="9.33" height="8" rx="1.33333" fill="black" />
    </svg>,
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.33C0.5 1.76703 1.76703 0.5 3.33 0.5H19.33C20.893 0.5 22.16 1.76703 22.16 3.33V8.67C22.16 10.233 20.893 11.5 19.33 11.5H3.33C1.76704 11.5 0.5 10.233 0.5 8.67V3.33Z"
        stroke="black"
        stroke-opacity="0.4"
      />
      <path
        d="M23.67 4V8C24.4747 7.66122 24.998 6.87313 24.998 6C24.998 5.12687 24.4747 4.33878 23.67 4Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect x="2" y="2" width="4" height="8" rx="1.33333" fill="#F8CC46" />
    </svg>,
    <svg
      width="25"
      height="12"
      viewBox="0 0 25 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 3.33C0.5 1.76703 1.76703 0.5 3.33 0.5H19.33C20.893 0.5 22.16 1.76703 22.16 3.33V8.67C22.16 10.233 20.893 11.5 19.33 11.5H3.33C1.76704 11.5 0.5 10.233 0.5 8.67V3.33Z"
        stroke="black"
        stroke-opacity="0.4"
      />
      <path
        d="M23.67 4V8C24.4747 7.66122 24.998 6.87313 24.998 6C24.998 5.12687 24.4747 4.33878 23.67 4Z"
        fill="black"
        fill-opacity="0.4"
      />
      <rect x="2" y="2" width="2" height="8" rx="1" fill="#FF0000" />
    </svg>,
  ],
  wifi: [
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13271 8.93958C8.77221 8.93958 9.39359 9.10762 9.94111 9.42804L10.1629 9.55787C10.3311 9.65629 10.3607 9.88665 10.2228 10.0242L8.32873 11.913C8.21239 12.029 8.02376 12.029 7.90742 11.913L6.02551 10.0363C5.88823 9.89939 5.91684 9.67021 6.0836 9.57106L6.30295 9.44064C6.85549 9.1121 7.48477 8.93958 8.13271 8.93958Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
      <path
        d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
      <path
        d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
    </svg>,
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13271 8.93958C8.77221 8.93958 9.39359 9.10762 9.94111 9.42804L10.1629 9.55787C10.3311 9.65629 10.3607 9.88665 10.2228 10.0242L8.32873 11.913C8.21239 12.029 8.02376 12.029 7.90742 11.913L6.02551 10.0363C5.88823 9.89939 5.91684 9.67021 6.0836 9.57106L6.30295 9.44064C6.85549 9.1121 7.48477 8.93958 8.13271 8.93958Z"
        fill="black"
      />
      <path
        d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
      <path
        d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
    </svg>,
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13271 8.93958C8.77221 8.93958 9.39359 9.10762 9.94111 9.42804L10.1629 9.55787C10.3311 9.65629 10.3607 9.88665 10.2228 10.0242L8.32873 11.913C8.21239 12.029 8.02376 12.029 7.90742 11.913L6.02551 10.0363C5.88823 9.89939 5.91684 9.67021 6.0836 9.57106L6.30295 9.44064C6.85549 9.1121 7.48477 8.93958 8.13271 8.93958Z"
        fill="black"
      />
      <path
        d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z"
        fill="black"
      />
      <path
        d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z"
        fill="#3C3C43"
        fill-opacity="0.3"
      />
    </svg>,
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.13271 8.93958C8.77221 8.93958 9.39359 9.10762 9.94111 9.42804L10.1629 9.55787C10.3311 9.65629 10.3607 9.88665 10.2228 10.0242L8.32873 11.913C8.21239 12.029 8.02376 12.029 7.90742 11.913L6.02551 10.0363C5.88823 9.89939 5.91684 9.67021 6.0836 9.57106L6.30295 9.44064C6.85549 9.1121 7.48477 8.93958 8.13271 8.93958Z"
        fill="black"
      />
      <path
        d="M8.13267 5.46985C9.7235 5.46985 11.2509 5.99759 12.4952 6.97491L12.6711 7.11303C12.8113 7.22315 12.8236 7.43064 12.6974 7.55649L11.5666 8.68412C11.462 8.78842 11.2965 8.8004 11.1779 8.71226L11.0401 8.60981C10.1997 7.98523 9.18633 7.6502 8.13267 7.6502C7.07251 7.6502 6.05323 7.9894 5.21005 8.62115L5.07207 8.72453C4.95346 8.81339 4.78737 8.80169 4.68247 8.69709L3.5521 7.56986C3.42618 7.44429 3.43813 7.23732 3.57769 7.127L3.75254 6.98876C4.99979 6.00273 6.53416 5.46985 8.13267 5.46985Z"
        fill="black"
      />
      <path
        d="M8.13272 2C10.6574 2 13.0717 2.89057 14.9828 4.52294L15.1459 4.66228C15.2777 4.77488 15.2855 4.97558 15.1627 5.09797L14.0356 6.22195C13.9264 6.33084 13.7519 6.33847 13.6336 6.23952L13.494 6.12283C11.9894 4.86472 10.1035 4.18035 8.13272 4.18035C6.15517 4.18035 4.26327 4.86943 2.75641 6.13541L2.6168 6.2527C2.4985 6.3521 2.32359 6.34466 2.2142 6.23557L1.08726 5.11176C0.964693 4.98954 0.972236 4.78918 1.10365 4.67646L1.26614 4.53708C3.17953 2.89589 5.60056 2 8.13272 2Z"
        fill="black"
      />
    </svg>,
  ],
  network: [
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 9H13C13.5523 9 14 9.44772 14 10V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V10C11 9.44772 11.4477 9 12 9Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 9H8.5C9.05228 9 9.5 9.44772 9.5 10V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V10C6.5 9.44772 6.94772 9 7.5 9Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 9H4C4.55228 9 5 9.44772 5 10V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V10C2 9.44772 2.44772 9 3 9Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 9H17.5C18.0523 9 18.5 9.44772 18.5 10V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V10C15.5 9.44772 15.9477 9 16.5 9Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
    </svg>,
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
    </svg>,
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
    </svg>,
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="#3C3C43"
        fill-opacity="0.18"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
    </svg>,
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="14" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 4H13C13.5523 4 14 4.44772 14 5V11C14 11.5523 13.5523 12 13 12H12C11.4477 12 11 11.5523 11 11V5C11 4.44772 11.4477 4 12 4Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 6H8.5C9.05228 6 9.5 6.44772 9.5 7V11C9.5 11.5523 9.05228 12 8.5 12H7.5C6.94772 12 6.5 11.5523 6.5 11V7C6.5 6.44772 6.94772 6 7.5 6Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 7.5H4C4.55228 7.5 5 7.94772 5 8.5V11C5 11.5523 4.55228 12 4 12H3C2.44772 12 2 11.5523 2 11V8.5C2 7.94772 2.44772 7.5 3 7.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5 2H17.5C18.0523 2 18.5 2.44772 18.5 3V11C18.5 11.5523 18.0523 12 17.5 12H16.5C15.9477 12 15.5 11.5523 15.5 11V3C15.5 2.44772 15.9477 2 16.5 2Z"
        fill="black"
      />
    </svg>,
  ],
};

const Topbar = ({theme}) => {
  console.log(theme)

  const time = new Date(Date.now()).toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles.topbar}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.time}>{time}</div>
        </div>
        <div className={styles.right}>
          <div className={styles.network}>
            {variants.network[random(0, variants.network.length - 1)]}
          </div>
          <div className={styles.wifi}>
            {variants.wifi[random(0, variants.wifi.length - 1)]}
          </div>
          <div className={styles.battery}>
            {variants.battery[random(0, variants.battery.length - 1)]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
