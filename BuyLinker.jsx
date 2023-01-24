import React from 'react'
import img from "../LinkerBuyPage/linker.png"
export const BuyLinker = () => {
  return (
    <div className="App2">
     <header class="section-header">

    <h1 className='Whitekren'>
    Buy Linkers from our Great Discount Packages    
    </h1>   
     </header> 
        <section class="section-content padding-y">
        <div class="container">

        <div class="row">
            <aside class="col-md-3">
        <div class="card">
        </div> 
            </aside> 
            <main class="col-md-9">
        <div class="row">
            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <span class="badge badge-danger"> NEW </span>
                        <img src={img} />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Micro Pack-50 Linkers</a>
                            <div class="price-wrap mt-2">
                                <span class="price">3500RS</span>     
                            </div>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                    <img src={img} />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div>
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Mini Pack-100 Linkers</a>
                            <div class="price-wrap mt-2">
                                <span class="price">5500 RS</span>
                            </div> 
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                        <img src={img} />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Mega Pack-500 Linkers</a>
                            <div class="price-wrap mt-2">
                                <span class="price">10000 RS</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 

            <div class="col-md-4">
                <figure class="card card-product-grid">
                    <div class="img-wrap"> 
                    <img src={img} />
                        <a class="btn-overlay" href="#"><i class="fa fa-search-plus"></i> Quick view</a>
                    </div> 
                    <figcaption class="info-wrap">
                        <div class="fix-height">
                            <a href="#" class="title">Single Linker</a>
                            <div class="price-wrap mt-2">
                                <span class="price">$100RS</span>
                            </div>
                        </div>
                        <a href="#" class="btn btn-block btn-primary">Add to cart </a>	
                    </figcaption>
                </figure>
            </div> 
        </div> 


        <nav class="mt-4" aria-label="Page navigation sample">
          <ul class="pagination">
            <li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
            <li class="page-item active"><a class="page-link" href="#">1</a></li>
         
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>
        </nav>

            </main>

        </div>

        </div> 
        </section>
        
        <footer class="section-footer border-top padding-y">
            <div class="container">
                <p class="float-md-right"> 
                    &copy; Copyright 2021 All rights reserved
                </p>
                
            </div>
        </footer>
       
     
    </div>
  )
}
export default BuyLinker;
