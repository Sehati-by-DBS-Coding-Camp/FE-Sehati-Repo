import { Routes, Route } from 'react-router-dom';
import BerandaView from '../features/beranda/berandaView';
import NotFoundPage from '../features/not-found/NotFoundPage';
import MasukView from '../features/masuk/masukView';
import DaftarView from '../features/daftar/daftarView';
import RiwayatView from '../features/riwayat/riwayatView';
import ProfilView from '../features/profil/profilView';
import EvaluasiDiriView from '../features/evaluasi-diri/evaluasiDiriView';
import BeritaView from '../features/berita/beritaView';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<BerandaView />} />
      <Route path="/masuk" element={<MasukView />} />
      <Route path="/daftar" element={<DaftarView />} />
      <Route path="/riwayat" element={<RiwayatView />} />
      <Route path="/profil" element={<ProfilView />} />
      <Route path="/evaluasi-diri" element={<EvaluasiDiriView />} />
      <Route path="/berita" element={<BeritaView />} />
    </Routes>
  );
};

export default AppRoutes;
