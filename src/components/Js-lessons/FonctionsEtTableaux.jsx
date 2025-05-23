import React from 'react'

const FonctionsEtTableaux = () => {

    //petite parenthèse sur les objets et tableaux
    const testing = {
        valeur1: 'ceci',
        valeur2: 'ceci',
        valeur3: 'ceci',
        valeur4: 'ceci',
        valeur5: 'ceci',
        valeur6: ['cela', 'même', {
            hey: 'ok',
            val: ['okidoki', 'cestcelamemee']
        }],
        afficherBlog: function () {
            return this.valeur1
        }
    }

    const testeur = [
        { valeur: ['hello', 'hellohello', 'santafe'] },
        { valeur2: ['hek', 'hekiheki', 'saloute'] }
    ]
    return (
        <div>
            <div>{testing.valeur6[2].val[1]} </div>
            <div>{testeur[1].valeur2.map((tache, index) => index === 2 ? tache : null)} </div>
            <div>{testing.afficherBlog()} </div>
        </div>
    )
}

export default FonctionsEtTableaux
