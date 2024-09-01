import React from 'react';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Customers',
};

const CustomersPage: React.FC = () => {
    return (
        <div>
            <h1>Halaman Pelanggan</h1>
            <p>Daftar pelanggan akan ditampilkan di sini.</p>
            {/* Tambahkan komponen atau logika untuk menampilkan daftar pelanggan */}
        </div>
    );
};

export default CustomersPage;