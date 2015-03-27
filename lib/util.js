export default function(app) {
  return {
    createRoute: function (name, route = null) {
      app.get(`/${route || name}`, function *(){
        render(name, data[name]);
      });
    }
  };
}

