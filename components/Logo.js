export default function Logo({ className = "", imageClassName = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="https://sadaqatgroup.com/wp-content/uploads/2019/04/SadaqatLogo2.png"
        alt="Sadaqat Logo"
        className={`h-16 w-auto object-contain sm:h-20 ${imageClassName}`}
      />
    </div>
  );
}
