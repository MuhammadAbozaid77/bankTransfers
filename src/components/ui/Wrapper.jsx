export default function Wrapper({ children, classesName }) {
  return (
    <>
      <div className={`xl:px-[150px] md:px-[100px] px-[20px]  ${classesName}`}>
        {children}
      </div>
    </>
  );
}
