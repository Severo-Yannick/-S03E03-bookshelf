// Formater la date de parution
const dayjs = require("dayjs");
// Plugin dayjs pour la gestion des intervalles de dates
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
// Plugin dayjs pour la gestion du format local des dates
const localizedFormat = require("dayjs/plugin/localizedFormat");
dayjs.extend(localizedFormat);
// Traduction en français
require("dayjs/locale/fr");
// Définition de la locale par défaut
dayjs.locale("fr");

const tableMaker = {
  makeTable: (books) => {
    
    let tableString = `
        <table>
          <thead>
              <tr style="text-align: center;">
                <th>Titre</th>
                <th>Langue</th>
                <th>Pays</th>
                <th>Auteur</th>
                <th>Date</th>
                <th>Age du livre</th>
              </tr>
          </thead>
          <tbody>
        `;
    
      for (let i = 0; i < books.length; i++) {
        tableString += `
          <tr>
            <td>${books[i].title}</td>
            <td>${books[i].language}</td>
            <td>${books[i].country}</td>
            <td>${books[i].author}</td>
            <!-- Formatage de la date avec dayjs-->
            <td>${dayjs(books[i].date).format("LL")}</td>
            <!-- Age du livre -->
            <td>${dayjs(books[i].date).fromNow()}</td>
          </tr>
        `;
      }
    
      tableString += `
          </tbody>
        </table>
      `;

    return tableString;  
  }

}

module.exports = tableMaker;