import React from "react";
import image from "../../assets/logo.png";

const SideTop = () => {
  return (
    <div className="sidetop">
      <div className="sidetop-1">
        <button>
          <img src={image} alt="logo" />
        </button>
      </div>
      <div className="sidetop-2">
        <div>
          <button className="datain">
            <div>
              <p>Data In</p>
            </div>
          </button>
          <button id="energy-data">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <g clip-path="url(#clip0_34_317)">
                <path
                  d="M8.14581 12.0417C9.03123 12.0417 9.78395 11.7317 10.404 11.1116C11.024 10.4916 11.3338 9.73912 11.3333 8.85418V5.66668H8.14581C7.2604 5.66668 6.50767 5.97669 5.88765 6.59672C5.26762 7.21675 4.95784 7.96923 4.95831 8.85418C4.95831 9.16112 4.99963 9.45626 5.08227 9.73959C5.16491 10.0229 5.28887 10.2945 5.45415 10.5542L5.17081 10.8375C5.04095 10.9674 4.97602 11.1327 4.97602 11.3333C4.97602 11.534 5.04095 11.6993 5.17081 11.8292C5.30067 11.959 5.46595 12.024 5.66665 12.024C5.86734 12.024 6.03262 11.959 6.16248 11.8292L6.44581 11.5458C6.70554 11.7111 6.97706 11.8351 7.2604 11.9177C7.54373 12.0004 7.83887 12.0417 8.14581 12.0417ZM8.14581 10.625C8.03956 10.625 7.93331 10.6132 7.82706 10.5896C7.72081 10.566 7.61456 10.5365 7.50831 10.5011L8.99581 8.99584C9.12567 8.86598 9.19061 8.70071 9.19061 8.50001C9.19061 8.29932 9.12567 8.13404 8.99581 8.00418C8.86595 7.87432 8.70067 7.80939 8.49998 7.80939C8.29929 7.80939 8.13401 7.87432 8.00415 8.00418L6.49894 9.49168C6.46352 9.38543 6.43401 9.27918 6.4104 9.17293C6.38679 9.06668 6.37498 8.96043 6.37498 8.85418C6.37498 8.35834 6.54616 7.93925 6.88852 7.59689C7.23088 7.25452 7.64998 7.08334 8.14581 7.08334H9.91665V8.85418C9.91665 9.35001 9.74547 9.76911 9.4031 10.1115C9.06074 10.4538 8.64165 10.625 8.14581 10.625ZM8.49998 16.2917L6.05623 14.3792L2.99269 14.0073L2.62081 10.9438L0.708313 8.50001L2.62081 6.05626L2.99269 2.99272L6.05623 2.62084L8.49998 0.708344L10.9437 2.62084L14.0073 2.99272L14.3791 6.05626L16.2916 8.50001L14.3791 10.9438L14.0073 14.0073L10.9437 14.3792L8.49998 16.2917ZM8.49998 14.4854L10.3771 13.0333L12.75 12.7323L13.0333 10.3771L14.4854 8.50001L13.0333 6.62293L12.7323 4.26772L10.3771 3.96668L8.49998 2.51459L6.6229 3.96668L4.24998 4.26772L3.96665 6.62293L2.51456 8.50001L3.96665 10.3771L4.26769 12.75L6.6229 13.0333L8.49998 14.4854Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_34_317">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p>Energy</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 8L12 16L19 8H5Z"
                fill="white"
              />
            </svg>
          </button>
          <button id="water-data">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 3.76999L11.25 4.60999C11.25 4.60999 9.97 6.05999 8.68 7.93999C7.39 9.81999 6 12.07 6 14.23C6 15.8213 6.63214 17.3474 7.75736 18.4726C8.88258 19.5978 10.4087 20.23 12 20.23C13.5913 20.23 15.1174 19.5978 16.2426 18.4726C17.3679 17.3474 18 15.8213 18 14.23C18 12.07 16.61 9.81999 15.32 7.93999C14.5243 6.78422 13.6664 5.67258 12.75 4.60999L12 3.76999ZM12 6.89999C12.44 7.41999 12.84 7.84999 13.68 9.06999C14.89 10.83 16 13.07 16 14.23C16 16.45 14.22 18.23 12 18.23C9.78 18.23 8 16.45 8 14.23C8 13.07 9.11 10.83 10.32 9.06999C11.16 7.84999 11.56 7.41999 12 6.89999Z"
                fill="white"
              />
            </svg>
            <p>Water and Effluents</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 8L12 16L19 8H5Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="sidetop-3">
        <button className="datain">
          <div>
            <p>Analyze</p>
          </div>
        </button>
        <button id="energy">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
          >
            <path
              d="M8.14581 12.5417C9.03123 12.5417 9.78395 12.2317 10.404 11.6116C11.024 10.9916 11.3338 10.2391 11.3333 9.35418V6.16668H8.14581C7.2604 6.16668 6.50767 6.47669 5.88765 7.09672C5.26762 7.71675 4.95784 8.46923 4.95831 9.35418C4.95831 9.66112 4.99963 9.95626 5.08227 10.2396C5.16491 10.5229 5.28887 10.7945 5.45415 11.0542L5.17081 11.3375C5.04095 11.4674 4.97602 11.6327 4.97602 11.8333C4.97602 12.034 5.04095 12.1993 5.17081 12.3292C5.30067 12.459 5.46595 12.524 5.66665 12.524C5.86734 12.524 6.03262 12.459 6.16248 12.3292L6.44581 12.0458C6.70554 12.2111 6.97706 12.3351 7.2604 12.4177C7.54373 12.5004 7.83887 12.5417 8.14581 12.5417ZM8.14581 11.125C8.03956 11.125 7.93331 11.1132 7.82706 11.0896C7.72081 11.066 7.61456 11.0365 7.50831 11.0011L8.99581 9.49584C9.12567 9.36598 9.19061 9.20071 9.19061 9.00001C9.19061 8.79932 9.12567 8.63404 8.99581 8.50418C8.86595 8.37432 8.70067 8.30939 8.49998 8.30939C8.29929 8.30939 8.13401 8.37432 8.00415 8.50418L6.49894 9.99168C6.46352 9.88543 6.43401 9.77918 6.4104 9.67293C6.38679 9.56668 6.37498 9.46043 6.37498 9.35418C6.37498 8.85834 6.54616 8.43925 6.88852 8.09689C7.23088 7.75452 7.64998 7.58334 8.14581 7.58334H9.91665V9.35418C9.91665 9.85001 9.74547 10.2691 9.4031 10.6115C9.06074 10.9538 8.64165 11.125 8.14581 11.125ZM8.49998 16.7917L6.05623 14.8792L2.99269 14.5073L2.62081 11.4438L0.708313 9.00001L2.62081 6.55626L2.99269 3.49272L6.05623 3.12084L8.49998 1.20834L10.9437 3.12084L14.0073 3.49272L14.3791 6.55626L16.2916 9.00001L14.3791 11.4438L14.0073 14.5073L10.9437 14.8792L8.49998 16.7917ZM8.49998 14.9854L10.3771 13.5333L12.75 13.2323L13.0333 10.8771L14.4854 9.00001L13.0333 7.12293L12.7323 4.76772L10.3771 4.46668L8.49998 3.01459L6.6229 4.46668L4.24998 4.76772L3.96665 7.12293L2.51456 9.00001L3.96665 10.8771L4.26769 13.25L6.6229 13.5333L8.49998 14.9854Z"
              fill="white"
            />
          </svg>
          <p>Energy</p>
        </button>
        <button id="water">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M4.66634 2.66634V1.33301H11.333V2.66634H14.6663V3.99967H13.333V13.9997C13.333 14.1765 13.2628 14.3461 13.1377 14.4711C13.0127 14.5961 12.8432 14.6663 12.6663 14.6663H3.33301C3.1562 14.6663 2.98663 14.5961 2.8616 14.4711C2.73658 14.3461 2.66634 14.1765 2.66634 13.9997V3.99967H1.33301V2.66634H4.66634ZM3.99967 3.99967V13.333H11.9997V3.99967H3.99967ZM5.99967 5.99967H7.33301V11.333H5.99967V5.99967ZM8.66634 5.99967H9.99967V11.333H8.66634V5.99967Z"
              fill="white"
            />
          </svg>
          <p>Waste <span> (βeta)</span></p>
        </button>
      </div>
      <div className="help">
        <button>
        <p>
        Open Help Centre
        </p>
        </button>
      </div>
    </div>
  );
};

export default SideTop;
