export default function SectionHead({ children }) {
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl lg:text-4xl font-bold text-green-600">
        {children}
      </h1>
    </div>
  );
}
