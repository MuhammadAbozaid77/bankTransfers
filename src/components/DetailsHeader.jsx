export default function DetailsHeader({ balance }) {
  return (
    <>
      <div className="flex items-end justify-between mb-8 col-span-2">
        <div>
          <p className="text-xl font-medium mb-[-0.5rem]">Current balance</p>
          <p className="text-sm text-gray-500">
            As of <span>05/03/2037</span>
          </p>
        </div>
        <p className="text-4xl font-normal"> {balance} €</p>
      </div>
    </>
  );
}
