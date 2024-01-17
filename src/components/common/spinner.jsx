export const Spinner = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        {...props}
      >
        <g>
          <circle cx="3" cy="12" r="2" fill="currentColor" />
          <circle cx="21" cy="12" r="2" fill="currentColor" />
          <circle cx="12" cy="21" r="2" fill="currentColor" />
          <circle cx="12" cy="3" r="2" fill="currentColor" />
          <circle cx="5.64" cy="5.64" r="2" fill="currentColor" />
          <circle cx="18.36" cy="18.36" r="2" fill="currentColor" />
          <circle cx="5.64" cy="18.36" r="2" fill="currentColor" />
          <circle cx="18.36" cy="5.64" r="2" fill="currentColor" />
          <animateTransform
            attributeName="transform"
            dur="1.5s"
            repeatCount="indefinite"
            type="rotate"
            values="0 12 12;360 12 12"
          />
        </g>
      </svg>
    </>
  );
};
