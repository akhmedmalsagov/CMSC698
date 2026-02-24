import Image from "next/image";

type Props = {
  size?: number;         // logo height & width in px
  className?: string;    // extra styling
  priority?: boolean;
};

export default function ErziLogo({ size = 36, className = "", priority = false }: Props) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src="/logo/erzi-logo.png"
        alt="ERZI Logo"
        fill
        className="object-contain"
        priority={priority}
        sizes={`${size}px`}
      />
    </div>
  );
}