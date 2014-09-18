describe("snowflake test", function()
{
  describe("snowflake service", function()
  {
    var $injector = angular.injector([ "ngSnowflake" ]);
    var snowflake = $injector.get( "snowflakeService" );

    it("should be defined", function ()
    {
      expect(snowflake).toBeDefined();
    });
    it("should be an object", function ()
    {
      expect(typeof snowflake).toBe("object");
    });

    it("should have a method init()", function ()
    {
      expect(snowflake.init).toBeDefined();
    });

    it("should have a method nextId()", function ()
    {
      expect(snowflake.nextId).toBeDefined();
    });

    it("should be initialized", function()
    {
      // returns undefined; will throw error
      snowflake.init({worker_id : 1, data_center_id : 1, sequence : 0});
    });

    it("should generate a snowflakeId", function ()
    {
      expect(typeof snowflake.nextId()).toBe("string");
    });

  });

});
