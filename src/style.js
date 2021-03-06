let style=
`body{
    background:linear-gradient(to bottom,  #141414, #ebebeb) !important;
}
.btn{
    background:rgb(65, 65, 65);
    padding:5px 20px;
}
.btn:hover{
    background:rgb(12, 12, 12);
    color:chartreuse;
} 

#navbarNav .nav-link.active{
    color:chartreuse;
}
#navbarNav .nav-link.active:hover{
    color:rgb(255, 0, 0);
}
#navbarNav .nav-link:hover{
    color:rgb(0, 255, 13);
}
#navbarNav{
    position: absolute;
    right:20px;
} 
.navbar-brand:hover {
    transform: scale(1.05);
    transition: all 0.5s easein-out;
}
.card {
    border-radius: 10px;
    border: none;
    position: relative;
    margin-bottom: 30px;
    box-shadow: 0 0.46875rem 2.1875rem rgba(90,97,105,0.1), 0 0.9375rem 1.40625rem rgba(90,97,105,0.1), 0 0.25rem 0.53125rem rgba(90,97,105,0.12), 0 0.125rem 0.1875rem rgba(90,97,105,0.1);
}
.l-bg-cherry {
    background: linear-gradient(to right, #f14040, rgb(141, 0, 7)) !important;
    color: #fff;
}

.l-bg-blue-dark {
    background: linear-gradient(to right, #373b44, #4286f4) !important;
    color: #fff;
}

.l-bg-green-dark {
    background: linear-gradient(to right, #0a504a, #38ef7d) !important;
    color: #fff;
}

.l-bg-orange-dark {
    background: linear-gradient(to right, #a86008, #ffba56) !important;
    color: #fff;
}



.card .cardLogo .card-icon {
    text-align: center;
    line-height: 50px;
    margin-left: 15px;
    color: rgb(255, 255, 255);
    position: absolute;
    right: 10px;
    top: 10px;
    opacity: 0.2;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}

.l-bg-green {
    background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
    color: #fff;
}

.l-bg-orange {
    background: linear-gradient(to right, #f9900e, #ffba56) !important;
    color: #fff;
}

.l-bg-cyan {
    background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
    color: #fff;
}

@media only screen and (max-width: 768px){
#navbarNav{
    position: relative;
    left:20px;
}    

}
`

module.exports =style;