/**
 * Elastic Columns demo page
 */
function Columninit()
{
    this.init();
};

/**
 * Inits the page
 */
Columninit.prototype.init = function()
{
    // DOM
    this.$container =   $('.columns');
    this.$loader =      $('.loader');

    // Creates and displays the grid
    this.$container.elasticColumns(
    {
        columns:        this.getColumnsCount(),
        innerMargin:    20,
        outerMargin:    20
    });
    this.displayItems();

    // Resize event: tell the plugin to refresh the layout
    $(window).on('resize', $.proxy(this, 'onResize'));
};

/**
 * Displays new content when it has been loaded
 */
Columninit.prototype.onNewContentLoaded = function()
{
    this.$container.elasticColumns('refresh');
    this.displayItems();
};


/**
 * Returns the number of columns depending on the container width
 */
Columninit.prototype.getColumnsCount = function()
{
    var grid_width =    $('.columns').width();
    var column_width =  grid_width;
    var columns =       1;
    while(column_width > 400)
    {
        columns += 1;
        column_width = grid_width / columns;
    }
    return columns;
};

/**
 * Resizes the window
 */
Columninit.prototype.onResize = function()
{
    this.$container.elasticColumns('refresh');
    this.$container.elasticColumns('set', 'columns', this.getColumnsCount());
};

/**
 * Displays the hidden grid items
 */
Columninit.prototype.displayItems = function()
{
    var delay = 0;
    this.$container.children(':hidden:not(.elastic-columns-ignore)').each(function()
    {
        $(this).delay(delay).fadeIn(300);
        delay += 150;
    });
    this.$loader.delay(delay).fadeOut(200);

};

/* Resizes the window */
Columninit.prototype.onResize = function()
{
    this.$container.elasticColumns('refresh');
    this.$container.elasticColumns('set', 'columns', this.getColumnsCount());
};

// Hidden grid items
Columninit.prototype.displayItems = function()
{
    var delay = 0;
    this.$container.children(':hidden:not(.elastic-columns-ignore)').each(function()
    {
        $(this).delay(delay).fadeIn(300);
        delay += 150;
    });
    this.$loader.delay(delay).fadeOut(200);

};
