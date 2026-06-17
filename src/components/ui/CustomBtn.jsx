import AppLink from './AppLink';

function CustomBtnIcon() {
  return (
    <span className="custom-btn__icon">
      <span className="custom-btn__icon-small">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
          <polygon points="33.7,95.8 27.8,90.5 63.9,50 27.8,9.5 33.7,4.2 74.6,50 " />
        </svg>
      </span>
      <span className="custom-btn__icon-circle">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" xmlSpace="preserve">
          <path className="bottomcircle" d="M18.2,18.2c17.6-17.6,46-17.6,63.6,0s17.6,46,0,63.6s-46,17.6-63.6,0" />
          <path className="topcircle" d="M18.2,18.2c17.6-17.6,46-17.6,63.6,0s17.6,46,0,63.6s-46,17.6-63.6,0" />
        </svg>
      </span>
    </span>
  );
}

export default function CustomBtn({
  href,
  label = 'Explore Now',
  type = 'button',
  disabled = false,
  className = '',
}) {
  const content = (
    <>
      <span className="custom-btn__label">{label}</span>
      <CustomBtnIcon />
    </>
  );

  const classes = `custom-btn${className ? ` ${className}` : ''}`;

  if (href) {
    return (
      <AppLink className={classes} href={href}>
        {content}
      </AppLink>
    );
  }

  return (
    <button type={type} className={classes} disabled={disabled}>
      {content}
    </button>
  );
}
