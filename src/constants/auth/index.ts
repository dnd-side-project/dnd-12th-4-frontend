export const AUTH_CAROUSEL_ITEMS = [
  { id: 0, title: "친구와 무전을 주고 받으며\n더 알아갈 수 있어요.", image: "https://placehold.co/230x230.png" },
  { id: 1, title: "하루에 질문 하나씩누가 질문\n하루에 질문 하나씩", image: "https://placehold.co/230x230.png" },
  { id: 2, title: "친구와 무전을 주고 받으며\n더 알아갈 수 있어요.", image: "https://placehold.co/230x230.png" }
]

export const FIRST_PAGE = 0
export const SECOND_PAGE = 1

export const GUIDE_INFO = {
  CHARACTER_INTRODUCE: [
    { messages: ["안녕하세요.", "저는 토끼에요."], buttonValue: "안녕!" },
    {
      messages: ["저에게 간단한 정보를 주시면.", "친구와의 소통을 도와드릴게요!"],
      buttonValue: "알겠어!",
      nextPageUrl: "common-nickname"
    }
  ],
  COMMON_NICKNAME: {
    messages: ["", "멋진 이름이네요."],
    buttonValue: "고마워!",
    nextPageUrl: "create-or-notify"
  },
  CHANNEL_NICKNAME: { messages: ["이제 친구와 소통하도록", "주파수를 맞춰볼게요."] },
  LATER_INVITATION: { messages: ["그럼 채널로", "보내드릴게요."] }
}

export const INITIAL_SETUP_INFO = {
  COMMON_NICKNAME: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "그럼..친구들과 소통할\n코드명을 알려주세요",
    description: "코드명은 앞으로 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요.",
    isLastPage: true
  },
  INVITE_OR_JOIN: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "이제 채널을 만들거나\n초대 코드를 저에게 알려주세요!"
  },
  INVITATION_CODE: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "친구에게 받은 코드를\n저에게 알려주세요"
  },
  INVITE_CHANNEL_NICKNAME: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "초대 받은 채널에서\n채널 코드명으로 활동해 보세요",
    description: "채널 코드명은 한 채널에서 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요.",
    isLastPage: true
  },
  CHANNEL_NAME: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "친구들과 소통할\n채널명을 만들어보세요",
    description: "채널명은 언제든지 수정이 가능해요."
  },
  CREATE_CHANNEL_NICKNAME: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "채널에서 채널 코드명으로\n활동해 보세요",
    description: "채널 코드명은 한 채널에서 사용할 닉네임이에요.\n회원 가입 후에도 수정이 가능해요."
  },
  CREATED_CHANNEL: {
    imageUrl: "https://placehold.co/229x229.png",
    title: "채널을 만들었어요!\n이제 친구를 초대할 수 있어요"
  }
}
