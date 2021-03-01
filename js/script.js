class Shop {
    data = datas
    panier = []
    card

    constructor () {
        this.setDataInHtml()
    }

    setDataInHtml () {
        for (let i = 0; i < this.data.length; i++) {
            const cardComponent = `<div id="cardSelector${i}" class="col-4 p-0 border border-dark">
                                <div class="card">
                                    <div class="card-header pt-0 pb-0" >
                                        <div class="row">
                                            <div class="col-8">
                                                <h5 id="title">${this.data[i].title}</h5>
                                            </div>
                                            <div class="col-4 m-0">
                                                <p id="price" class="m-0">${this.data[i].price}€</p>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="img/nounours-beige-clair-28-cm-6901.jpg" class="card-img-top" alt="...">
                                    <div class="card-body">
                                    <div class="row">
                                        <div class="col-7">
                                            <p id="description">${this.data[i].content}</p>
                                        </div>
                                        <div class="col-5">
                                            <div class="row">
                                                <div class="col-12">
                                                    <input style="width: 100%;" id="input${i}" type="number">
                                                </div>
                                                <div class="col-12 mt-2">
                                                    <img id="btnPanier${i}" src="img/panier.png" style="width: 100%;" alt="">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>`            
            document.querySelector('#card').insertAdjacentHTML( 'beforeend', cardComponent );
            document.querySelector('#btnPanier'+i).addEventListener('click',  () => {
                let nb = document.querySelector(`#input${i}`).value
                if (nb) {
                   this.addPanier(nb, i)
                } else {
                    alert('Vous devez choisir une quantité')
                }
            })
        }
    }

    addPanier (nb, id) {
        const cardPanier = {
            id: id,
            content: `<div id="panier${id}" class="col-12 border border-dark">
                                <div class="row ">
                                    <div class="col-3 text-center p-0">
                                        <img src="img/nounours-beige-clair-28-cm-6901.jpg" style="width: 100%;" alt="">
                                    </div>
                                    <div class="col-3 text-center p-0">
                                        <p>title</p>
                                    </div>
                                    <div id="number${id}" class="col-3 align-middle text-center p-0">
                                        ${nb}X
                                    </div>
                                    <div class="col-3 text-center p-0">
                                        <img src="img/trash.png" id="delete${id}" width="100%" alt="">
                                    </div>
                                </div>
                            </div>`
        }
        let panierI = document.querySelector(`#panier${id}`)
        console.log(panierI)
        console.log(this.panier)
        if (panierI) {
            let t = parseInt(document.querySelector(`#number${id}`).innerHTML.trim().substr(0,1))
            let res = t + parseInt(nb)
            document.querySelector(`#number${id}`).innerHTML = `${res}X`
            console.log(document.querySelector(`#number${id}`).innerHTML)
        } else {
            this.panier.push(cardPanier)
            document.querySelector('#panier').insertAdjacentHTML( 'beforeend', cardPanier.content );
        }

        document.querySelector('#delete'+id).addEventListener('click',  () => {
            document.querySelector('#panier'+id).remove()
        })
    }
}

new Shop()
