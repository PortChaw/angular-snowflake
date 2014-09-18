angular-snowflake is an AngularJS clone for [twitter snowflake](https://github.com/twitter/snowflake), based on [node-snowflake](https://github.com/kurten/node-snowflake)

## usage
--------------------------
<code>
>//only run snowflake nextId<br>
>var id = snowflake.nextId(); // use default set<br>
>//or <br>
>//snowflake.init({worker_id : 1, data_center_id : 1, sequence : 0});<br>
>//var id = snowflake.nextId();<br>
>console.log(id);
</code>

## development
__getting started__:

`npm install`

__running tests__:

`npm test`

