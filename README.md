# Ruang Siswa

Ruang Siswa adalah **project pembelajaran dan prototype frontend**, bukan website resmi sekolah/pesantren atau sistem yang sudah digunakan untuk mengelola data sungguhan. Project ini dibuat untuk latihan membangun dashboard pembelajaran menggunakan React. Fitur-fitur yang tersedia menggambarkan contoh pengelolaan informasi kegiatan belajar santri melalui antarmuka yang responsif.

## Fitur

- **Halaman beranda publik** — memperkenalkan platform, menampilkan ringkasan fitur, testimoni, dan FAQ.
- **Autentikasi demo** — menyediakan halaman Sign In dan Sign Up dengan validasi formulir. Sign In membuka dashboard, sedangkan Sign Up mengarahkan pengguna ke halaman Sign In.
- **Dashboard admin** — menampilkan ringkasan jumlah santri, kehadiran, guru/karyawan, kelas, ekstrakurikuler, dan mata pelajaran, beserta aksi cepat.
- **Data santri** — menampilkan daftar santri dan menyediakan pencarian berdasarkan nama.
- **Nilai santri** — menampilkan contoh nilai mata pelajaran dan nilai rata-rata.
- **Absensi** — memungkinkan status kehadiran santri dipilih sebagai Hadir, Izin, Sakit, atau Alpa, lalu menampilkan ringkasannya.
- **Daftar kelas** — menampilkan kelas VII sampai XII, jumlah santri, wali kelas, dan filter jenjang.
- **Jadwal kelas** — menampilkan contoh agenda dan sesi pembelajaran.
- **Profil admin** — menyediakan formulir untuk memperbarui nama, email, dan nomor telepon dengan validasi.
- **Navigasi dashboard** — sidebar untuk berpindah halaman admin, termasuk halaman Tentang dan Pengaturan.
- **Tampilan responsif** — layout menyesuaikan ukuran layar desktop maupun perangkat mobile.

## Teknologi dan library

| Teknologi / library | Kegunaan |
| --- | --- |
| [React 19](https://react.dev/) | Membangun antarmuka berbasis komponen. |
| [Vite](https://vite.dev/) | Menjalankan server pengembangan dan membangun aplikasi. |
| [React Router](https://reactrouter.com/) | Mengatur navigasi dan rute halaman. |
| [Tailwind CSS 4](https://tailwindcss.com/) | Menata tampilan menggunakan utility classes. |
| [shadcn/ui](https://ui.shadcn.com/) dan [Radix UI](https://www.radix-ui.com/) | Komponen antarmuka dan primitive aksesibel yang digunakan oleh komponen UI proyek. |
| [Lucide React](https://lucide.dev/) | Ikon untuk navigasi dan elemen antarmuka. |
| [React Hook Form](https://react-hook-form.com/) | Mengelola input dan status formulir. |
| [Zod](https://zod.dev/) dan `@hookform/resolvers` | Mendefinisikan aturan validasi dan menghubungkannya ke React Hook Form. |
| `class-variance-authority` dan `cn` | Membantu mengatur variasi class dan class CSS komponen. |
| `cmdk`, `react-day-picker`, dan `vaul` | Library pendukung untuk komponen command, kalender, dan drawer. |
| `@fontsource-variable/inter` | Menyediakan font Inter Variable secara lokal. |

## Menjalankan proyek

Pastikan [Node.js](https://nodejs.org/) dan npm sudah terpasang.

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

Perintah lain yang tersedia:

```bash
npm run build    # Membuat build untuk produksi
npm run preview  # Menjalankan preview build
npm run lint     # Memeriksa kode dengan ESLint
```

## Catatan

Project ini hanya untuk tujuan pembelajaran dan demonstrasi, bukan sistem produksi. Data santri, nilai, jadwal, dan ringkasan dashboard menggunakan data contoh di sisi aplikasi; belum ada backend atau database. Autentikasi juga belum terhubung ke layanan akun: formulir Sign In hanya menyimpan penanda akses di `localStorage` browser, dan formulir Sign Up belum membuat atau menyimpan akun. Jangan gunakan aplikasi ini untuk menyimpan atau mengelola data nyata.
