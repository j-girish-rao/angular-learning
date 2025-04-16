export class DrinksResponse {
    public drinks: Drink[];

    public constructor() {
        this.drinks = [];
    }

    public setDrinks(_drinks: []) {
        this.drinks = _drinks;
    }

    public getDrinks() {
        return this.drinks;
    }

}

export class Drink {
    public dateModified: string = '';
    public idDrink: string = '';
    public strAlcoholic: string = '';
    public strCategory: string = '';
    public strCreativeCommonsConfirmed: string = '';
    public strDrink: string = '';
    public strDrinkThumb: string = '';
    public strGlass: string = '';
    public strIngredient1: string = '';
    public strIngredient2: string = '';
    public strIngredient3: string = '';
    public strIngredient4: string = '';
    public strInstructions: string = '';
    public strMeasure1: string = '';
    public strMeasure2: string = '';
    public strMeasure3: string = '';
    public strMeasure4: string = '';

    public constructor() {}

    public setDrink(
        _dateModified: string,
        _idDrink: string,
        _strAlcoholic: string,
        _strCategory: string,
        _strCreativeCommonsConfirmed: string,
        _strDrink: string,
        _strDrinkThumb: string,
        _strGlass: string,
        _strIngredient1: string,
        _strIngredient2: string,
        _strIngredient3: string,
        _strIngredient4: string,
        _strInstructions: string,
        _strMeasure1: string,
        _strMeasure2: string,
        _strMeasure3: string,
        _strMeasure4: string
    ) {
        this.dateModified= _dateModified;
        this.idDrink = _idDrink;
        this.strAlcoholic = _strAlcoholic;
        this.strCategory = _strCategory;
        this.strCreativeCommonsConfirmed = _strCreativeCommonsConfirmed;
        this.strDrink = _strDrink;
        this.strDrinkThumb = _strDrinkThumb;
        this.strGlass = _strGlass;
        this.strIngredient1 = _strIngredient1;
        this.strIngredient2 = _strIngredient2;
        this.strIngredient3 = _strIngredient3;
        this.strIngredient4 = _strIngredient4;
        this.strInstructions = _strInstructions;
        this.strMeasure1 = _strMeasure1;
        this.strMeasure2 = _strMeasure2;
        this.strMeasure3 = _strMeasure3;
        this.strMeasure4 = _strMeasure4;
    }
}