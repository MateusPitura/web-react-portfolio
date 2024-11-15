interface VerticalLineProperties {
  gradient?: boolean;
}

export default function VerticalLine({ gradient }: VerticalLineProperties) {
  return (
    <div className="min-w-[1.25rem] flex justify-center ">
      {gradient ? (
        <div className="bg-gradient-to-b from-surface-light dark:from-surface-dark to-secondary-light mb-5 min-heigth-[6.25rem] w-[0.25rem]" />
      ) : (
        <div className="bg-surface-light dark:bg-surface-dark min-heigth-[6.25rem] w-[0.25rem]" />
      )}
    </div>
  );
}
