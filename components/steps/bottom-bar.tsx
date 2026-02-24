export default function BottomBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-end md:justify-end">
      <div className="w-full md:w-auto">{children}</div>
    </div>
  );
}
