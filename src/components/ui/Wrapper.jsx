export default function Wrapper({ children, classesName }) {
  return (
    <>
      <div className={`xl:px-[250px] md:px-[100px] px-[20px]  ${classesName}`}>
        {children}
      </div>
    </>
  );
}
