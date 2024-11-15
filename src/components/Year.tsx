interface YearProperties {
  year: string;
}

export default function Year({ year }: YearProperties) {
  return (
    <div className="p-4 flex sm:justify-end">
      <div className="my-5 text-[2rem] text-outline-light min-w-[4.6875rem]">
        {year}
      </div>
    </div>
  );
}
