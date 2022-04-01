const methods = {
  Enter: {
    message: '들어왔습니다.',
    needNickname: true,
  },
  Leave: {
    message: '나갔습니다.',
    needNickname: false,
  },
  Change: {
    message: null,
    needNickname: true,
  },
};

function solution(record) {
  const actions = [];
  const uids = {};

  for (const item of record) {
    const [method, uid, nickname] = item.split(' ');

    if (!uids[uid]) {
      uids[uid] = nickname;
    } else {
      if (methods[method].needNickname) uids[uid] = nickname;
    }

    if (methods[method].message) {
      actions.push({ uid, method });
    }
  }

  const result = actions.map(
    ({ uid, method }) => `${uids[uid]}님이 ${methods[method].message}`
  );

  return result;
}

console.log(
  solution([
    'Enter uid1234 Muzi',
    'Enter uid4567 Prodo',
    'Leave uid1234',
    'Enter uid1234 Prodo',
    'Change uid4567 Ryan',
  ])
);
