Basic:    
    
    <PasswordInput
      name="password"
      onChange={(event) => this.setState({ password: event.target.value })}
      maxLength={50}
    />

All features enabled:

    <PasswordInput
      name="password"
      onChange={() => {}}
      maxLength={50}
      minLength={7}
      showTips={true}
      showVisibilityToggle={true}
      showQuality={true}
    />
