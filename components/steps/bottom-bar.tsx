export default function BottomBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 justify-end flex">
      {children}
    </div>
  );
}
