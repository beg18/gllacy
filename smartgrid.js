const smartgrid = require('smart-grid');

smartgrid('src/css/libs', {
    mobileFirst: false,
    filename: "smart-grid",
    columns: 12,
    offset: "20px",
    container: {
        maxWidth: "900px"
    },
    breakPoints: {
        md: {
            width: "860px",
            fields: "10px"
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "600px"
        },
        xxs: {
            width: "320px"
        }
    }
});

smartgrid('src/css/libs', settings);




/*
smartgrid('.');
 * mobileFirst
 *  false -> max-width
 *  true -> min-width
 */