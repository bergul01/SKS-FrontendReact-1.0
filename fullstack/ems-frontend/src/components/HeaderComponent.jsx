import React from "react";

const HeaderComponent = () => {

    return(
        <div>
            <header>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand"  href="http://localhost:5173">SEVKİYAT KONTROL SİSTEMLERİ</a>
                    <ul class="nav nav-pills nav-fill">
                          <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="http://localhost:5173">ANA SAYFA</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" href="http://localhost:5173/employees">PERSONEL EKLE</a>
                          </li>


                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">SEVKİYAT OLUŞTUR</a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="http://localhost:5173/vehicle">ARAÇ EKLE</a></li>
                              <li><a class="dropdown-item" href="http://localhost:5173/ship">GEMİ EKLE</a></li>
                              <li><a class="dropdown-item" href="http://localhost:5173/company">FİRMA EKLE</a></li>
                              <li><a class="dropdown-item" href="#">ÜRÜN EKLE</a></li>
                              <li><a class="dropdown-item" href="#">LOKASYON EKLE</a></li>
                              
                            </ul>
                          </li>


                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">RAPORLAR</a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">ARAÇ RAPORU OLUŞTUR</a></li>
                              <li><a class="dropdown-item" href="#">GEMİ RAPORU OLUŞTUR</a></li>
                              <li><a class="dropdown-item" href="#">FİRMA RAPORU OLUŞTUR</a></li>
                              <li><a class="dropdown-item" href="#">FİŞ RAPORU OLUŞTUR</a></li>
                              
                            </ul>
                          </li>

                          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">RAPORLAR</a>
                            <ul class="dropdown-menu">
                              <li><a class="dropdown-item" href="#">ARAÇ RAPORU</a></li>
                              <li><a class="dropdown-item" href="#">GEMİ RAPORU</a></li>
                              <li><a class="dropdown-item" href="#">FİRMA RAPORU</a></li>
                              <li><a class="dropdown-item" href="#">FİŞ RAPORU</a></li>
                              
                            </ul>
                          </li>

                          <li class="nav-item">
                            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                          </li>
                    </ul>
                </nav>
            </header>
        </div>
        
    )
}

export default HeaderComponent