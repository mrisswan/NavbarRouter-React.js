import React from "react";
import Utama from "./Components/utama";
import './App.css';
import { Link } from "react-router-dom";

class App extends React.Component{
  render(){
    return(
      <div>
        <ul>
          <li class="scroll-to-section"><Link to="/beranda">Beranda</Link></li>
          <li><Link to="/datasiswa">DataSiswa</Link></li>
          <li><Link to="/datapetugas">DataPetugas</Link></li>
          <li><Link to="/datakelas">DataKelas</Link></li>
          <li><Link to="/dataspp">DataSPP</Link></li>
          <li><Link to="/transaksi">Transaksi</Link></li>
          <li><Link to="/historypembayaran">HistoryPembayaran</Link></li>
        </ul>
        <div className="home">
          <Utama/>
        </div>
      </div>
    )
  }
}

export default App;
