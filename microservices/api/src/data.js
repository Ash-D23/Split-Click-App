var express = require('express');
var router = express.Router();
var config = require('./config');
var request = require('request');
var fetchAction = require('node-fetch');
var dateTime = require('node-datetime');
//"Authorization": "Bearer db537b6beef57a393859c2683ffb614f49fb8d6e6679465a"
//// headers = { "Authorization" : "Bearer " + authToken }
//hasura ms logs -n detoxification67-user api
//config.projectConfig.url.data

const token = process.env.admintk;

router.route("/").get(function (req, res) {
  res.send("backend splitwise app");
})

router.route("/updateinfo").post(function (req,res){
  var hid=req.body.hasura_id;
  var email=req.body.email;
  var phone=req.body.phone;
  const hasura_id = req.headers['x-hasura-user-id'];
  const hasura_role = req.headers['x-hasura-role'];
  const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          'X-Hasura-User-Id': hasura_id,
          'X-Hasura-Role': hasura_role
      }
  };

  var body = {
      "type": "update",
      "args": {
          "table": "userinfo",
          "where": {
              "hasura_id": {
                  "$eq": hid
              }
          },
          "$set": {
              "email_id": email,
              "phone_no": phone
          },
          "returning": [
              "hasura_id",
              "user_name",
              "phone_no",
              "email_id"
          ]
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
    message: "access denied"
  });

  });


});


router.route("/insertinfo").post(function (req,res){
var hid=req.body.hasura_id;
var hname=req.body.username;
var email=req.body.email;
var phone=req.body.phone;
const hasura_id = req.headers['x-hasura-user-id'];
const hasura_role = req.headers['x-hasura-role'];
const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          'X-Hasura-User-Id': hasura_id,
          'X-Hasura-Role': hasura_role
      }
  };

  var body = {
      "type": "insert",
      "args": {
          "table": "userinfo",
          "objects": [
              {
                  "hasura_id": hid,
                  "user_name": hname,
                  "phone_no": phone,
                  "email_id": email
            }

          ]
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

});

router.route("/info/:id").get(function(req,res){
var hid= req.params.id;

  var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "type": "select",
    "args": {
        "table": "userinfo",
        "columns": [
            "hasura_id",
            "phone_no",
            "email_id",
            "user_name"
        ],
        "where": {
            "hasura_id": {
                "$eq": hid
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});
});
});

router.route("/userinfo/:value").get(function (req,res){
var phone = req.params.value;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"

    }
};

var body = {
    "type": "select",
    "args": {
        "table": "userinfo",
        "columns": [
            "user_name",
            "phone_no",
            "hasura_id"
        ],
        "where": {
            "phone_no": {
                "$eq": phone
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

});


router.route("/insertgroup").post(function (req,res){
  var gname=req.body.groupname;
  const hasura_id = req.headers['x-hasura-user-id'];
  const hasura_role = req.headers['x-hasura-role'];
  const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];


  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          'X-Hasura-User-Id': hasura_id,
          'X-Hasura-Role': hasura_role
      }
  };

  var body = {
      "type": "insert",
      "args": {
          "table": "group",
          "objects": [
              {
                  "group_name": gname
              }
          ],
          "returning": [
              "group_name",
              "group_id"
          ]
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

});


router.route("/addmembers").post(function (req,res){
var hid=req.body.hasura_id;
var dname = req.body.username;
var gid = req.body.groupid;
const hasura_id = req.headers['x-hasura-user-id'];
const hasura_role = req.headers['x-hasura-role'];
const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        'X-Hasura-User-Id': hasura_id,
        'X-Hasura-Role': hasura_role
    }
};

var body = {
    "type": "insert",
    "args": {
        "table": "usergroups",
        "objects": [
            {
                "hasura_id": hid,
                "user_name": dname,
                "group_id": gid
            }
        ],
        "returning": [
            "s.no",
            "user_name",
            "hasura_id"
        ]
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});


});


router.route("/insertbill").post(function (req,res){
var gid=req.body.groupid;
var hid=req.body.hasura_id;
var bname=req.body.bill_name;
var amount=req.body.user_payed;
const hasura_id = req.headers['x-hasura-user-id'];
const hasura_role = req.headers['x-hasura-role'];
const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];
  var fetchAction =  require('node-fetch');
  var dt = dateTime.create();
  var formatted = dt.format('Y-m-d');


  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          'X-Hasura-User-Id': hasura_id,
          'X-Hasura-Role': hasura_role
      }
  };

  var body = {
      "type": "insert",
      "args": {
          "table": "userbills",
          "objects": [
              {
                  "group_id": gid,
                  "user_due": amount,
                  "user_payed": amount,
                  "hasura_id": hid,
                  "bill_name": bname,
                  "bill_date":formatted
              }
          ],
          "returning": []
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

});


router.route("/billlist/:id").get(function (req,res){
var gid = req.params.id;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "type": "select",
    "args": {
        "table": "userbills",
        "columns": [
            "bill_no",
            "hasura_id",
            "bill_name",
            "group_id",
            "user_payed",
            "bill_date",
            "split"
        ],
        "where": {
            "group_id": {
                "$eq": gid
            }
        },
        "group_by": [
            {
                "column": "bill_date"
            }
        ]
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

});


router.route("/avg/:id").get(function (req,res){
var gid = req.params.id;

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"

      }
  };

  var body = {
      "type": "run_sql",
      "args": {
           "sql": "select avg(user_payed),group_id,split from userbills group by split,group_id having split=false and group_id="+gid+";"
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

});

router.route("/sum/:id").get(function (req,res){
var hid = req.params.id;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"

    }
};

var body = {
    "type": "run_sql",
    "args": {
        "sql": "select sum(user_payed) from userbills where hasura_id="+hid+" group by hasura_id;"
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

});

router.route("/groupsum/:id").get(function (req,res){
var gid = req.params.id;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "type": "run_sql",
    "args": {
        "sql": "select sum(user_payed) from userbills where group_id="+gid+" group by group_id;"
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

});

router.route("/update").post(function (req,res){
var gid=req.body.group_id;
var val=req.body.value;
const hasura_id = req.headers['x-hasura-user-id'];
const hasura_role = req.headers['x-hasura-role'];
const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];

var fetchAction =  require('node-fetch');

var url =config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        'X-Hasura-User-Id': hasura_id,
        'X-Hasura-Role': hasura_role
    }
};

var body = {
    "type": "update",
    "args": {
        "table": "userbills",
        "where": {
            "group_id": {
                "$eq": gid
            },
            "split": {
                "$eq": "false"
            }
        },
        "$set": {
            "split": "true"
        },
        "$inc": {
            "user_due": val
        },
        "returning": [
            "bill_no",
            "bill_name",
            "user_due",
            "group_id",
            "split"
        ]
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

});

router.route("/userlist/:id").get(function (req,res){
var gid = req.params.id;

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  var body = {
      "type": "select",
      "args": {
          "table": "usergroups",
          "columns": [
              "user_name",
              "group_id",
              "hasura_id"
          ],
          "where": {
              "group_id": {
                  "$eq": gid
              }
          }
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
    message: "access denied"
  });
  });

});

router.route("/grouplist/:id").get(function (req,res){
var hid = req.params.id;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "type": "select",
    "args": {
        "table": "usergroups",
        "columns": [
            "hasura_id",
            "user_name",
            "group_id",
            {
                "name": "gid",
                "columns": [
                    "group_name"
                ]
            }
        ],
        "where": {
            "hasura_id": {
                "$eq": hid
            }
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

});


router.route("/deleteuser").post(function (req,res){
var gid=req.body.group_id;
var hid=req.body.hasura_id;
const hasura_id = req.headers['x-hasura-user-id'];
const hasura_role = req.headers['x-hasura-role'];
const hasura_allowed_role = req.headers['x-hasura-allowed-roles'];

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json",
        'X-Hasura-User-Id': hasura_id,
        'X-Hasura-Role': hasura_role
    }
};

var body = {
    "type": "delete",
    "args": {
        "table": "usergroups",
        "where": {
            "$and": [
                {
                    "hasura_id": {
                        "$eq": hid
                    }
                },
                {
                    "group_id": {
                        "$eq": gid
                    }
                }
            ]
        }
    }
};

requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	res.json(result);
})
.catch(function(error) {
  res.status(500).json({
  message: "access denied"
});

});

})

router.route("/userdue/:id").get(function (req, res){
var gid=req.params.id;

var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
  "method": "POST",
  "headers": {
      "Content-Type": "application/json"
  }
};

var body = {
  "type": "select",
  "args": {
      "table": "userbills",
      "columns": [
          "hasura_id",
          "bill_name",
          "group_id",
          "user_due"
      ],
      "where": {
          "$and": [
              {
                  "group_id": {
                      "$eq": gid
                  }
              },
              {
                  "split": {
                      "$eq": "true"
                  }
              }
          ]
      }
  }
};

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});

  });

})

router.route("/count/:id").get(function (req, res){
var gid=req.params.id;

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;

  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json"
      }
  };

  var body = {
      "type": "count",
      "args": {
          "table": "usergroups",
          "where": {
              "group_id": {
                  "$eq": gid
              }
          }
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
});
});

});

router.route("/username/:id").get(function (req, res){
var hid=req.params.id;


var fetchAction =  require('node-fetch');

var url = config.projectConfig.url.data;

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "type": "select",
    "args": {
        "table": "userinfo",
        "columns": [
            "*"
        ],
        "where": {
            "hasura_id": {
                "$eq": hid
            }
        }
    }
};

  requestOptions.body = JSON.stringify(body);

fetchAction(url, requestOptions)
.then(function(response) {
  return response.json();
})
.then(function(result) {
  res.json(result);
})
.catch(function(error) {
  res.status(500).json({
message: "access denied"
});
});

});

router.route("/userjoindue/:id").get(function (req, res){
var gid=req.params.id;

  var fetchAction =  require('node-fetch');

  var url = config.projectConfig.url.data;
//ce0a0ff7cc75ba0c5fc15575c8a9f22b96d5c7a387a68960
  var requestOptions = {
      "method": "POST",
      "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer "+token
      }
  };

  var body = {
      "type": "run_sql",
      "args": {
          "sql": "SELECT userbills.hasura_id, userinfo.user_name, userbills.bill_name, userbills.group_id, userbills.user_due FROM userbills INNER JOIN userinfo ON userbills.hasura_id=userinfo.hasura_id where group_id ="+ gid +" and split = true;"
      }
  };

  requestOptions.body = JSON.stringify(body);

  fetchAction(url, requestOptions)
  .then(function(response) {
  	return response.json();
  })
  .then(function(result) {
  	res.json(result);
  })
  .catch(function(error) {
    res.status(500).json({
  message: "access denied"
  });
  });

});

module.exports = router;
