import ClientCard from "./ClientCard";


export default function ClientList({ clients }) {
  if (clients.length === 0) {
    return (
      <p className="text-center text-amber-900/60 mt-8 font-medium">
        No clients found matching your search.
      </p>
    );
  }

  return (
    <>
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} />
      ))}
    </>
  );
}