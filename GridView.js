class GridView {
    /**
     * properties
     * @param [arrey] _tableClass
     * @param [arrey] _data - input data
     * @param [arrey] _atribute - set which data output
     * @param [arrey] _element - in what element output data
     * @param [arrey] _header - header of table
     * @param [arrey] _headerClass - css classes of header
     */

    constructor() {
        this._header = '';
        this._headerClass = [];
        this._tableClass = [];
        this._element = 'body';
        this._attribute = [];
        this._data = [];
    }



    /**
     * Method set header
     */

    setHeader(header) {
        if (typeof header === 'string' && header.trim() != '') {
            this._header = header;
            return true;
        }
        return false;
    }

    /**
     * Method set headerClass
     */

    setHeaderClass(headerClass) {
        if (typeof headerClass === 'object') {
            this._headerClass = headerClass;
            return true;
        }
        return false;
    }

    /**
     * Method set tableClass
     */

    setTableClass(tableClass) {
        if (typeof tableClass === 'object') {
            this._tableClass = tableClass;
            return true;
        }
        return false;
    }


    /**
     * Method set element
     */

    setElement(element) {
        if (document.querySelector(element)) {
            this._element = element;
            return true;
        }
        return false;
    }


    /**
     * Method set attributes
     */

    setAttribute (attribute) {
        if (typeof attribute === 'object' && attribute != {}) {
            this._attribute = attribute;
            return true;
        }
        return false;
    }


    /**
     * Method set data
     */

    setData (data) {
        if (typeof data === 'object' && data != {}) {
            this._data = data;
            return true;
        }
        return false;
    }

   
    /**
     * Method for show GridViewTable
     */

    render(data) {
        console.log(this.setElement(data.element));
        this.setHeader(data.header);
        this.setHeaderClass(data.headerClass);
        this.setTableClass(data.tableClass);
        this.setData(data.data);
        this.setAttribute(data.attribute)


        //Show heder
        if (this._header) {
            let header = document.createElement('h1');
            header.textContent = this._header;
            this._headerClass.forEach(cssClass => {
                header.classList.add(cssClass);
            });
            document.querySelector(this._element).append(header);
        }

        // Show table

        const table = document.createElement('table');
        this._tableClass.forEach(cssClass => {
            table.classList.add(cssClass);
        });

        // Create table header

        let tabHeader = document.createElement('tr');
        for( let key in this._attribute) {
            let thTabel = document.createElement('th');
            if (this._attribute[key].label) {
                thTabel.textContent = this._attribute[key].label;
            } else {
                thTabel.textContent = key;
            }
            tabHeader.append(thTabel);
        }
        table.append(tabHeader);


        // Fill the body of table

        for (let i = 0; i < this._data.length; i++) {
            let dataArr = this._data[i];
            let tr = document.createElement('tr');
            for (let key in this._attribute) {
                let td = document.createElement('td');
                let value = dataArr[key];
                if (this._attribute[key].value) {
                    value = this._attribute[key].value(dataArr);
                }

                if (this._attribute[key].src || this._attribute[key].value) {
                    td.innerHTML = value;
                } else {td.textContent = value}
                
                tr.append(td);

            }
            table.append(tr);
        }

        document.querySelector(this._element).append(table);
        
    }
}