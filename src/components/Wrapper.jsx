export default function Wrapper({ children, classesName }) {
  return (
    <>
      <div className={`lg:px-[150px] md:px-[50px] px-[20px]  ${classesName}`}>
        {children}
      </div>
    </>
  );
}
