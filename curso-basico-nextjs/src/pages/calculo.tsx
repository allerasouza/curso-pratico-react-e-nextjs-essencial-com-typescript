import { useState } from 'react';
import dynamic from 'next/dynamic';
// import { Modal } from '../components/Modal';

const Modal = dynamic(
  () => import('../components/Modal').then(mod => mod.Modal),
  { loading: () => <p>Loading ...</p>, ssr: false },
);

export default function Calculo() {
  const [modalVisible, setModalVisible] = useState(false);

  async function handleSum() {
    const calc = (await import('../libs/calc')).default;
    alert(calc.sum(5, 6));
  }

  function handleModalVisible() {
    setModalVisible(!modalVisible);
  }

  return (
    <div>
      <h1>Calculo</h1>
      <button onClick={handleSum}>Somar</button>
      <button onClick={handleModalVisible}>Modal</button>
      {modalVisible && <Modal />}
    </div>
  );
}
