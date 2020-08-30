const dataGet = {
  id: 1,
  request: {
    method: 'GET',
    resourceType: 'xhr',
    url: 'https://now.qq.com/cgi-bin/now/pc/user/get_user_follow_ts?bkn=1418269854&_=0.2717764620560481',
  },
  response: {
    body: '{"retcode":0,"result":{"ret_info":{"err_code":0},"anchor_info":[{"cover_url":"http://p.qlogo.cn/hy_personal_room/1211120615/12111206151598069165/640","audience_sum":33,"sdkType":1,"sign_name":"🦋涅槃重生","nick_name":"🦋小恋er。回归","frame_cover_url":null,"room_city":"上海市","videoBeginTimestamp":1598166995,"anchor_logo_url":"https://nowpic.gtimg.com/hy_personal/18aeb610f30b4e4d23b6c34fc9cb4859d3d8ba8bc36a7b6918c3bb8b0a8ee436670218ffd1392fab/","room_name":"","room_id":1211120615,"start_time":1598166995,"content_type":0}]}}',
    status: 200,
  },
  _resourceType: 'xhr',
};

const dataPost = {
  id: 2,
  request: {
    method: 'POST',
    resourceType: 'xhr',
    url: 'https://live.rtc.qq.com:8687/api/uploadlog',
  },
  response: {
    body: '{"errode":0,"errmsg":"succ!"}',
    status: 200,
  },
  _resourceType: 'xhr',
};

const dataMockStar = {
  id: 3,
  request: {
    method: 'GET',
    resourceType: 'xhr',
    url: 'https://now.qq.com/cgi-bin/a/b/get_balance',
  },
  response: {
    body: '{"retcode":0,"result":{"ret_info":{"err_code":0},"anchor_info":[{"cover_url":"http://p.qlogo.cn/hy_personal_room/1211120615/12111206151598069165/640","audience_sum":33,"sdkType":1,"sign_name":"🦋涅槃重生","nick_name":"🦋小恋er。回归","frame_cover_url":null,"room_city":"上海市","videoBeginTimestamp":1598166995,"anchor_logo_url":"https://nowpic.gtimg.com/hy_personal/18aeb610f30b4e4d23b6c34fc9cb4859d3d8ba8bc36a7b6918c3bb8b0a8ee436670218ffd1392fab/","room_name":"","room_id":1211120615,"start_time":1598166995,"content_type":0}]}}',
    status: 200,
    headers: [
      {
        name: 'x-mockstar-delay',
        value: 0,
      },
      {
        name: 'x-mockstar-mock-module',
        value: 'success_16888',
      },
      {
        name: 'x-mockstar-mocker',
        value: 'get_balance',
      },
    ],
  },
  _resourceType: 'xhr',
};

const dataMockStarOther = {
  id: 4,
  request: {
    method: 'GET',
    resourceType: 'xhr',
    url: 'https://now.qq.com/cgi-bin/other-mockstar-server',
  },
  response: {
    body: '{"retcode":0,"result":{"ret_info":{"err_code":0},"anchor_info":[{"cover_url":"http://p.qlogo.cn/hy_personal_room/1211120615/12111206151598069165/640","audience_sum":33,"sdkType":1,"sign_name":"🦋涅槃重生","nick_name":"🦋小恋er。回归","frame_cover_url":null,"room_city":"上海市","videoBeginTimestamp":1598166995,"anchor_logo_url":"https://nowpic.gtimg.com/hy_personal/18aeb610f30b4e4d23b6c34fc9cb4859d3d8ba8bc36a7b6918c3bb8b0a8ee436670218ffd1392fab/","room_name":"","room_id":1211120615,"start_time":1598166995,"content_type":0}]}}',
    status: 200,
    headers: [
      {
        name: 'x-mockstar-delay',
        value: 0,
      },
      {
        name: 'x-mockstar-mock-module',
        value: 'some-other-mock-module',
      },
      {
        name: 'x-mockstar-mocker',
        value: 'some-other-mocker',
      },
    ],
  },
  _resourceType: 'xhr',
};

export { dataGet, dataPost, dataMockStar, dataMockStarOther };
