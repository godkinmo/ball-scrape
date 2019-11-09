import axios from 'axios'
import _ from 'lodash'

async function getTodayMatches() {
  const url = 'https://imsb-bafa.roshan88.com/newmobilesite/api/Event/GetSportEvents'

  const { data } = await axios.post(
    url,
    {
      'Delta': 'H4sIAAAAAAAEAIuuVgouyC8qCaksSFWyMtRR8k0syk4tUbIy0lFySc0pSQxOzi8CyVgaGhpYGFgYGxmbGJgY6hkgSwcU5ZdlpqQWKVkBhcNSi4oz8/P8SnOTwCJ6BrU6pFtiao7bEkOslsQCALhot57LAAAA',
      'Sport': 1,
      'Market': 2,
      'BetTypes': [3,1,2],
      'Periods': [1,2],
      'MarketLineLevels': [1],
      'IsCombo': false,
      'OddsType': 2,
      'DateFrom': '',
      'DateTo': '',
      'CompetitionIds': [],
      'Season': 0,
      'MatchDay': 0
    },
    {
      headers: {
        'Host': 'imsb-bafa.roshan88.com',
        'Connection': 'keep-alive',
        'Content-Length': '350',
        'Pragma': 'no-cache',
        'Cache-Control': 'no-cache',
        'Accept': 'application/json',
        'Origin': 'https://imsb-bafa.roshan88.com',
        'x-lang': 'hans',
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1',
        'Content-Type': 'application/json; charset=utf-8',
        'Sec-Fetch-Site': 'same-origin',
        'Sec-Fetch-Mode': 'cors',
        'Referer': 'https://imsb-bafa.roshan88.com/newmobilesite/sports/1',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-HK,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6',
      }
    }
  )

  const matches = data['sel']

  return matches
    // .filter(match => {
    //   return match['cn'] === '保加利亚甲级联赛'
    // })
    .map(match => {
      const oddsArray = match.mls.map(ml => {
        return {
          type: `${ml.bti}${ml.ml}${ml.pi}`,
          odds: ml.ws,
        }
      })

      return {
        name: match['cn'],
        data: [
          {
            name: '主場',
            value: match['htn'],
          },
          {
            name: '客場',
            value: match['atn'],
          },
          {
            name: '全場1x2',
            value: f1(_.find(oddsArray, item => item.type === '311')),
          },
          {
            name: '全場讓球',
            value: _.find(oddsArray, item => item.type === '111'),
          },
          {
            name: '全場大小',
            value: _.find(oddsArray, item => item.type === '211'),
          },
          {
            name: '上半場1x2',
            value: _.find(oddsArray, item => item.type === '312'),
          },
          {
            name: '上半場讓球',
            value: _.find(oddsArray, item => item.type === '112'),
          },
          {
            name: '上半場大/小',
            value: _.find(oddsArray, item => item.type === '212'),
          },
        ]
      }
    })
}

function f1(item) {
  return `
    主: ${_.get(item, 'odds[0].o')},
    客: ${_.get(item, 'odds[1].o')},
    和: ${_.get(item, 'odds[2].o')},
  `
}

export {
  getTodayMatches
}
