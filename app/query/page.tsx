// query/InvoiceList.jsx (or .tsx if using TypeScript)
import { listInvoices } from '@/app/query/routes/route';


async function InvoiceList() {
  let invoices: any[] = [];
  let error;

  try {
    invoices = await listInvoices();
  } catch (err) {
    error = 'Failed to fetch invoices';
    console.error(err);
  }

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Invoices</h2>
      <ul>
        {invoices.map((invoice, index) => (
          <li key={index}>
            {invoice.name}: ${invoice.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default InvoiceList;
