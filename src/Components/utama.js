import React from "react";
//import {Switch, Route} from "react-router-dom";
import {Routes, Route} from 'react-router-dom';
// import { Button } from 'react-bootstrap';

import Beranda from "./beranda";
import DataSiswa from "./datasiswa";
import DataPetugas from "./datapetugas";
import DataKelas from "./datakelas";
import DataSPP from "./dataspp";
import Transaksi from "./transaksi";
import HistoryPembayaran from "./historypembayaran";

const Utama = () => (
    <div>
        <Routes>
            <Route exact path ="/beranda" element = {<Beranda/>} />
            <Route path = "/datasiswa" element = {<DataSiswa/>} />
            <Route path = "/datapetugas" element = {<DataPetugas/>} />
            <Route path = "/datakelas" element = {<DataKelas/>} />
            <Route path = "/dataspp" element = {<DataSPP/>} />
            <Route path = "/transaksi" element = {<Transaksi/>} />
            <Route path = "/historypembayaran" element = {<HistoryPembayaran/>} />
        </Routes>
    </div>
)
export default Utama