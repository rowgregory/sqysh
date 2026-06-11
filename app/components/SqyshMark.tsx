// app/components/SqyshMark.tsx
// The flat Sqysh mark as inline SVG — crisp at any size/DPR, no image pipeline.
// <SqyshMark size={70} />            → chartreuse
// <SqyshMark size={70} color="#37e1c2" /> → teal variant

export const SqyshMark = ({
  size = 40,
  color = "#a6ff4d",
  className,
}: {
  size?: number;
  color?: string;
  className?: string;
}) => (
  <svg
    width={size}
    height={size * (250 / 240)}
    viewBox="0 0 240 250"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M 30 100 C 30 50, 70 30, 120 30 C 170 30, 210 50, 210 100 C 210 130, 205 155, 195 175 C 200 200, 180 222, 161 200 C 154 226, 130 228, 122 202 C 114 228, 90 226, 83 200 C 64 222, 40 200, 45 175 C 35 155, 30 130, 30 100 Z"
      fill={color}
    />
    <ellipse cx="85" cy="105" rx="13" ry="17" fill="#0F1115" />
    <ellipse cx="155" cy="105" rx="13" ry="17" fill="#0F1115" />
    <ellipse cx="82" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
    <ellipse cx="152" cy="99" rx="3" ry="4.5" fill="#FFFFFF" />
  </svg>
);
