module.exports = [
  {
    '$group': {
      '_id': {
        'federal': '$federal',
        'state': '$state'
      },
      'city': {
        '$push': {
          'label': '$_id',
          'value': '$city'
        }
      }
    }
  }, {
    '$group': {
      '_id': '$_id.federal',
      'state': {
        '$push': {
          'label': '$_id.state',
          'value': '$_id.state',
          'city': '$city'
        }
      }
    }
  }, {
    '$project': {
      '_id': 0,
      'label': '$_id',
      'value': '$_id',
      'state': '$state'
    }
  }, {
    '$sort': {
      'label': 1
    }
  }
]
