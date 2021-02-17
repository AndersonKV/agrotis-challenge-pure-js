class Template {
  templateInit() {
    const isDom = document.querySelector(".container");

    while (isDom.hasChildNodes()) {
      isDom.removeChild(isDom.lastChild);
    }

    const dataStorage = localStorage.getItem("item");
    //localStorage.clear();
    const getData = JSON.parse(dataStorage || "[]");
    console.log(getData);

    const div = document.createElement("div");
    const string = `<div><h1>Inicio</h1></div>
    <div class="content-main">
      <div class="item" id="list-companies">
        <span>
          <i class="fas fa-building"></i>
        </span>
        <span>Listar empresas</span>
      </div>
      <div class="item" id="register-companies">
        <span>
          <i class="fas fa-store"></i>
        </span>
        <span>Cadastrar empresas</span>
      </div>
    </div>`;

    div.innerHTML = string;
    document.querySelector(".container").append(div);
  }

  templateCadaster() {
    const isDom = document.querySelector(".container");

    while (isDom.hasChildNodes()) {
      isDom.removeChild(isDom.lastChild);
    }
    const div = document.createElement("div");
    const string = `  <div class="section-cadaster">
      <header>
        <span class="button-back"><i class="fas fa-arrow-left"></i></span>
        <span class="white"
          >Empresas / <span class="bold">Cadastrar Empresa</span></span
        >
        <button>Salvar</button>
      </header>

      <div class="section-cadaster__middler">
        <div class="col">
          <span><i class="fas fa-camera"></i></span>
        </div>
        <div class="col-6">
          <div class="flex i">
            <div class="flex flex-direction-column margin-5 flex-1">
              <label for="cpf" class="bold">Tipo de documento</label>
              <select id="cpf">
              <option value="cpf">CPF</option>
              <option value="cnpj">CNPJ</option>
              </select>
            </div>
            <div class="margin-5 flex-2">
              <input placeholder="Documento" type="text" id="document" />
            </div>
            <div class="margin-5 flex-2">
              <input
                placeholder="Nome completo/razão social"
                type="text"
                id="name-complete-or-company-name"
              />
            </div>
          </div>
          <div class="flex margin-5">
            <div class="margin-5 flex-2">
              <input placeholder="E-mail" type="email" id="email"/>
            </div>
            <div class="margin-5 flex-2">
              <input placeholder="Data de abertura" type="text" id="opening-date" />
            </div>
          </div>
        </div>
      </div>

      <div class="section-cadaster__bottom">
        <div class="flex margin-5 col">
          <div class="margin-5">
            <h3 class="bold">Endereço</h3>
            <input placeholder="CEP" type="text" id="cep" />
          </div>
          <div class="margin-5">
            <input placeholder="Endereço" id="address" type="text"/>
          </div>
        </div>

        <div class="flex margin-5">
          <div class="margin-5 flex-2">
            <input placeholder="Número" type="number" id="number" />
          </div>
          <div class="margin-5 flex-2">
            <input
              placeholder="Complemento"
              type="text"
              id="complement"
            />
          </div>
          <div class="margin-5 flex-2">
            <input placeholder="Bairro" type="text" id="district" />
          </div>
          <div class="margin-5 flex-2">
            <input placeholder="UF" type="text" id="uf" />
          </div>
          <div class="margin-5 flex-2">
            <input placeholder="Cidade" type="text" id="city" />
          </div>
        </div>
      </div>
    </div>`;

    div.innerHTML = string;

    div
      .querySelector("button")
      .addEventListener("click", new Template().handleSavedCompanies);

    div
      .querySelector(".button-back")
      .addEventListener("click", new Template().pageBack);

    document.querySelector(".container").append(div);
  }

  templateListCompanies() {
    const isDom = document.querySelector(".container");

    while (isDom.hasChildNodes()) {
      isDom.removeChild(isDom.lastChild);
    }
    const div = document.createElement("div");

    const dataStorage = localStorage.getItem("item");
    //localStorage.clear();
    const getData = JSON.parse(dataStorage || "[]");

    let output = getData.map((i) => {
      return `
        <tbody>
          <tr>
            <td class="display-flex flex-direction-column text-left">
              <span>${i.select}</span>
              <span class="gray">${i.city}</span>
            </td>
            <td>${i.city}/PR</td>
            <td>${i.cep}</td>
            <td>${i.openingDate}</td>
          </tr>
        </tbody>
        `;
    });

    const string = ` <div class="section-list-companies">
    <header>
      <span class="button-back"><i class="fas fa-arrow-left"></i></span>
      <span class="white bold">Empresas </span>
    </header>

    <table class="table">
      <thead>
        <tr>
          <th class="display-flex flex-direction-column text-left">
            Indentificação
          </th>
          <th>Cidade/UF</th>
          <th>CEP</th>
          <th>Data de abertura</th>
        </tr>
      </thead>
      
    </table>
  </div>`;

    div.innerHTML = string;
    div.querySelector(".table").innerHTML += output.join("");

    div
      .querySelector(".button-back")
      .addEventListener("click", new Template().pageBack);

    document.querySelector(".container").append(div);
  }

  handleSavedCompanies() {
    const select = document.querySelector("select");
    const myDocument = document.querySelector("#document");
    const nameCompleteOrCompanyName = document.querySelector(
      "#name-complete-or-company-name"
    );
    const email = document.querySelector("#email");
    const cep = document.querySelector("#cep");
    const address = document.querySelector("#address");
    const number = document.querySelector("#number");
    const complement = document.querySelector("#complement");
    const district = document.querySelector("#district");
    const uf = document.querySelector("#uf");
    const city = document.querySelector("#city");
    const openingDate = document.querySelector("#opening-date");

    if (select.value.length === 0) {
      alert("selecione o tipo de documento");
      return;
    }

    if (openingDate.value.length === 0) {
      alert("selecione a data de abertura");
      return;
    }
    if (myDocument.value.trim().trim().length === 0) {
      alert("digite o documento");
      return;
    }
    if (nameCompleteOrCompanyName.value.trim().length === 0) {
      alert("digite o nome e razão social");
      return;
    }

    if (email.value.trim().length === 0) {
      alert("digite o email");
      return;
    }

    if (cep.value.trim().length === 0) {
      alert("digite o cep");
      return;
    }

    if (address.value.trim().length === 0) {
      alert("digite o endereço");
      return;
    }

    if (number.value.trim().length === 0) {
      alert("digite o numero");
      return;
    }
    if (complement.value.trim().length === 0) {
      alert("digite o complemento");
      return;
    }
    if (district.value.trim().length === 0) {
      alert("digite o distrito");
      return;
    }
    if (uf.value.trim().length === 0) {
      alert("digite a unidade federativa");
      return;
    }
    if (city.value.trim().length === 0) {
      alert("digite o nome da cidade");
      return;
    }

    const data = [];

    data.push({
      select: select.value,
      myDocument: myDocument.value,
      nameCompleteOrCompanyName: nameCompleteOrCompanyName.value,
      email: email.value,
      cep: cep.value,
      address: address.value,
      number: number.value,
      complement: complement.value,
      district: district.value,
      uf: uf.value,
      city: city.value,
      openingDate: openingDate.value,
    });

    //pega item do localstorage
    const dataStorage = localStorage.getItem("item");
    //converte, caso exista não vira um objeto vazio
    const getData = JSON.parse(dataStorage || "[]");
    //junta os dois array, do localstorage e o novo da data
    const dataFinal = getData.concat(data);
    //converte para ser inserido no localstorage
    const dataStringfy = JSON.stringify(dataFinal);
    localStorage.setItem("item", dataStringfy);
    alert("salvo com sucesso");
  }

  pageBack() {
    new Template().templateInit();
  }
}

class Companies extends Template {
  constructor() {
    super();
    //this.templateInit();
    this.setEventHandler();
    console.log("iniciando");
  }
  setEventHandler() {
    const home = document.querySelectorAll("#home");
    const listCompanies = document.querySelectorAll("#list-companies");
    const listCompaniesDiv = document.querySelector("#list-companies-div");
    const registerCompanies = document.querySelectorAll("#register-companies");
    const template = new Template();

    //page home
    home.forEach((element) => {
      element.addEventListener("click", template.templateInit);
    });

    //page list companies
    listCompanies.forEach((element) => {
      element.addEventListener("click", template.templateCadaster);
    });

    //page register companies
    registerCompanies.forEach((element) => {
      element.addEventListener("click", template.templateListCompanies);
    });
  }
}
