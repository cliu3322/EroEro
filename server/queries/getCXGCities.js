module.exports =[
  {
    '$group': {
      '_id': {
        'federal': '$federal',
        'state': '$state',
        'city': '$city',
        'id': '$_id'
      }
    }
  }, {
    '$group': {
      '_id': {
        'federal': '$_id.federal',
        'state': '$_id.state'
      },
      'cityusage': {
        '$push': {
          'label': '$_id.city',
          'value': '$_id.id'
        }
      }
    }
  }, {
    '$group': {
      '_id': '$_id.federal',
      'children': {
        '$push': {
          'label': '$_id.state',
          'value': '$_id.state',
          'children': '$cityusage'
        }
      }
    }
  }, {
    '$project': {
      '_id': 0,
      'label': '$_id',
      'value': '$_id',
      'children': '$children'
    }
  }, {
    '$sort': {
      'value': 1
    }
  }
]
