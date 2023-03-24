import * as React from 'react';
import { Listing } from '../../data/interfaces';

interface ListingsProps {
  listings: Listing[];
  listingsAmount: number;
  isOwner: boolean;
}

export const ListingsDisplay: React.FunctionComponent<ListingsProps> = (
  props
) => {
  const { listings, listingsAmount, isOwner } = props;
  return (
    <div className="m-5">
      <div className="row mb-4 border-bottom border-3 border-primary">
        <h6 className="col">Obrázok</h6>
        <h6 className="col-5">Informácie</h6>
        <h6 className="col">Cena</h6>
        <h6 className="col">Lokalita</h6>
        {isOwner === true ? <h6 className="col">Pozretia</h6> : null}
        {isOwner === true ? (
          //fix css
          <div className="col grid gap-0 column-gap-3"></div>
        ) : null}
      </div>
      {listings.map((item, i) => {
        if (i < listingsAmount) {
          return (
            <div className="row">
              <img alt="Obrazok" className="col" />
              <div className="col-5">
                <b>{item.name}</b>
                <p>{item.description}</p>
              </div>
              <b className="col">{item.price}</b>
              <p className="col">{item.locality}</p>
              {isOwner === true ? (
                <p className="col">{item.watch_count}</p>
              ) : null}

              {isOwner === true ? (
                <div className="col grid gap-0 column-gap-3">
                  <button className="col btn btn-secondary p-2 g-col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </button>
                  <button className="col btn btn-danger p-2 g-col-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </div>
              ) : null}

              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};
