export default function SectionHead({ children }) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-2xl lg:text-3xl font-bold text-green-600">
        {children}
      </h1>
    </div>
  );
}
